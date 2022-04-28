import { useContext, useEffect, useRef, useState } from "react";
import { DispatchContext } from "../App.js";
import { url } from "../data/image.js";

let _ctx;
let height;
let width;
let animation;
let particleArray = [];

const adjust = {};

const mouse = {
  x: undefined,
  y: undefined,
  radius: window.innerWidth / 8,
};

document.addEventListener("mousemove", ({ clientX, clientY }) => {
  mouse.x = clientX;
  mouse.y = clientY;
});

document.addEventListener("touchmove", ({ targetTouches }) => {
  mouse.x = targetTouches[0].pageX;
  mouse.y = targetTouches[0].pageY;
});

document.addEventListener("touchend", () => {
  mouse.x = undefined;
  mouse.y = undefined;
});

function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.size = 3;
  this.baseX = this.x;
  this.baseY = this.y;
  this.color = color;
  this.density = Math.random() * 30 + 10;

  this.draw = () => {
    _ctx.fillStyle = this.color;
    _ctx.beginPath();
    _ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    _ctx.closePath();
    _ctx.fill();
  };

  this.update = () => {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const directionX = forceDirectionX * force * this.density;
    const directionY = forceDirectionY * force * this.density;
    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  };
}

function Canvas() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const canvas = useRef(null);
  const [font, setFont] = useState(null);
  const [image, setImage] = useState(null);
  const [ctx, setCtx] = useState(null);
  const [pixels, setPixels] = useState(null);
  const [mode, setMode] = useState(false);

  const { isOpen } = useContext(DispatchContext);

  useEffect(() => {
    window.addEventListener("storage", ({ detail }) => {
      setMode(detail);
    });
  }, []);

  useEffect(() => {
    // image down
    const hand = new Image();
    hand.src = url;
    hand.onload = () => setImage(hand);

    // apply font
    const fontFace = new FontFace("Scada", `url(${env.PUBLIC_URL}font/Scada-Regular.woff2)`);
    fontFace.load().then(() => {
      document.fonts.add(fontFace);
      setFont(fontFace);
    });
  }, []);

  useEffect(() => {
    if (font && canvas && image) {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      const ctx = canvas.current.getContext("2d");
      setCtx(ctx);
      _ctx = ctx;

      ctx.font = `56px Scada`;
      ctx.textAlign = "left";

      const text = ctx.measureText("hello");
      height = text.actualBoundingBoxAscent + text.actualBoundingBoxDescent;

      width = text.width + height;

      ctx.fillStyle = "black";
      ctx.fillText("hello", height, height);
      ctx.drawImage(image, 0, 0, height, height);
      window.innerWidth < 900
        ? setPixels(ctx.getImageData(0, 0, height, height))
        : setPixels(ctx.getImageData(0, 0, width, height));
      ctx.clearRect(0, 0, width, height + 2);
    }
  }, [canvas, font, image]);

  useEffect(() => {
    if (ctx) {
      let distance = 6;

      if (window.innerWidth < 900) {
        adjust.x = window.innerWidth / 2 - (distance * height) / 2;
        adjust.y = window.innerHeight / 2 - (distance * height) / 2;
      } else {
        adjust.x = window.innerWidth / 2 - (distance * width) / 2;
        adjust.y = window.innerHeight / 2 - (distance * height + 50) / 2;
      }

      const create = () => {
        particleArray = [];
        const y2 = pixels.height;
        const x2 = pixels.width;
        for (let y = 0; y < y2; y++) {
          for (let x = 0; x < x2; x++) {
            if (pixels.data[y * 4 * x2 + x * 4 + 3] > 128) {
              let color;
              const red = pixels.data[y * 4 * x2 + x * 4];
              if (red < 10) {
                color = "black";
              } else {
                const green = pixels.data[y * 4 * x2 + x * 4 + 1];
                const blue = pixels.data[y * 4 * x2 + x * 4 + 2];
                color = `rgb(${red},${green}, ${blue})`;
              }
              const posY = y * distance + adjust.y;
              const posX = x * distance + adjust.x;
              particleArray.push(new Particle(posX, posY, color));
            }
          }
        }
      };

      create();
    }
  }, [pixels]);

  // isOpen
  useEffect(() => {
    if (!pixels) return;

    if (animation) window.cancelAnimationFrame(animation);

    function animate() {
      animation = window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
      const leng = particleArray.length;
      for (let i = 0; i < leng; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
    }

    isOpen ? window.cancelAnimationFrame(animation) : animate();
    
  }, [pixels, isOpen]);

  // darkMode
  useEffect(() => {
    const leng = particleArray.length;
    for (let i = 0; i < leng; i++) {
      if (particleArray[i].color === "black") particleArray[i].color = "white";
      else if (particleArray[i].color === "white") particleArray[i].color = "black";
    }
  }, [mode]);

  return (
    <canvas ref={canvas} className="main-canvas">
      this browser is not support html canvas, please try again other browser
    </canvas>
  );
}

export default Canvas;
