import { useEffect, useRef } from "react";

const NumericalMindBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const fontSize = 12;
    const columns = Math.ceil(canvas.width / fontSize);
    const rows = Math.ceil(canvas.height / fontSize);
    
    // Store states for each cell: [opacity, targetOpacity, char]
    const cells = new Float32Array(columns * rows * 2); 
    const chars = new Uint8Array(columns * rows);

    for (let i = 0; i < columns * rows; i++) {
      chars[i] = Math.random() > 0.5 ? 48 : 49; // '0' or '1'
      cells[i * 2] = Math.random(); // current opacity
      cells[i * 2 + 1] = Math.random(); // target opacity
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const pulseX = (Math.sin(time / 2000) * 0.5 + 0.5) * canvas.width;
      const pulseY = (Math.cos(time / 1500) * 0.5 + 0.5) * canvas.height;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const idx = y * columns + x;
          const posX = x * fontSize + fontSize / 2;
          const posY = y * fontSize + fontSize / 2;

          // Update character randomly (calculating feel)
          if (Math.random() > 0.98) {
            chars[idx] = Math.floor(Math.random() * 10) + 48;
          }

          // Distance to pulse
          const dx = posX - pulseX;
          const dy = posY - pulseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pulseEffect = Math.max(0, 1 - dist / 300);

          // Update opacity
          if (Math.random() > 0.95) cells[idx * 2 + 1] = Math.random() * 0.3;
          cells[idx * 2] += (cells[idx * 2 + 1] - cells[idx * 2]) * 0.1;

          const opacity = (cells[idx * 2] + pulseEffect * 0.5) * 0.2;
          
          if (opacity > 0.02) {
            ctx.fillStyle = `rgba(240, 240, 240, ${opacity})`;
            ctx.fillText(String.fromCharCode(chars[idx]), posX, posY);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-50"
    />
  );
};

export default NumericalMindBackground;
