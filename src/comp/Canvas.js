import { useEffect, useRef } from "react";

function Canvas() {
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
  }, [canvas]);

  return (
    <canvas ref={canvas} className="main-canvas">
      this browser is not support html canvas, please try again other browser
    </canvas>
  );
}

export default Canvas;
