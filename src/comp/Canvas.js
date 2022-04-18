import { useEffect, useRef, useState } from "react";

function Canvas() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const canvas = useRef(null);
  const [font, setFont] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // image down
    const sunImage = new Image();
    sunImage.src = env.PUBLIC_URL + "assets/light.svg";
    sunImage.onload = () => setImage(sunImage);

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

      ctx.fillStyle = "black";
      ctx.font = `200px Scada`;
      ctx.textAlign = "center";
      ctx.drawImage(image, 0, 0, 400, 400);
      ctx.fillText("hello", canvas.current.width / 2, canvas.current.height / 2);
    }
  }, [canvas, font, image]);

  return (
    <canvas ref={canvas} className="main-canvas">
      this browser is not support html canvas, please try again other browser
    </canvas>
  );
}

export default Canvas;
