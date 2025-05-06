import React, { useState, useEffect, useRef } from "react";
export const Cursor = ({ children }) => {
  const canvasRef = useRef(null);
  const cursor = useRef({ x: 0, y: 0, radius: 25 });
  const [cursorSize, setCursorSize] = useState(25);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      cursor.current.x = e.clientX;
      cursor.current.y = e.clientY;
      drawCursor(ctx, canvas);
    };

    const drawCursor = (ctx, canvas) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.ellipse(
        cursor.current.x,
        cursor.current.y,
        cursorSize,
        cursorSize,
        0,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fill();
      ctx.closePath();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorSize]);

  const handleMouseOver = () => {
    setCursorSize(40);
  };

  const handleMouseLeave = () => {
    setCursorSize(25);
  };

  const transfer = { handleMouseOver, handleMouseLeave };

  return (
    <div style={{ display: "grid" }}>
      <div className="cursor-box">
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      </div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onMouseEnter: handleMouseOver,
          onMouseLeave: handleMouseLeave,
        })
      )}
    </div>
  );
};
