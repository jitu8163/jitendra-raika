import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Generate points on a sphere using Fibonacci lattice for even distribution
function buildSpherePoints(radius: number, count: number) {
  const pts: { x: number; y: number; z: number; c: string }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    // Scale by radius
    pts.push({
      x: x * radius,
      y: y * radius,
      z: z * radius,
      c: Math.random() > 0.5 ? "0" : "1"
    });
  }

  return pts;
}

export default function NumericalSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotRef = useRef({ x: 0, y: 0 });
  const targetRotRef = useRef({ x: 0, y: 0 });
  const curPts = useRef<{ x: number; y: number; z: number; c: string }[]>([]);
  
  // Drag refs
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate initial points for the sphere
    curPts.current = buildSpherePoints(0.65, 520);

    // Draggable logic
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        // Very subtle follow when NOT dragging
        targetRotRef.current.y += (e.movementX * 0.0003);
        targetRotRef.current.x += (e.movementY * 0.0003);
        return;
      }

      // Dragging logic
      const deltaX = e.clientX - lastMouseRef.current.x;
      const deltaY = e.clientY - lastMouseRef.current.y;
      
      targetRotRef.current.y += deltaX * 0.005; 
      targetRotRef.current.x += deltaY * 0.005; 
      
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth rotation towards target
      rotRef.current.x += (targetRotRef.current.x - rotRef.current.x) * 0.1;
      rotRef.current.y += (targetRotRef.current.y - rotRef.current.y) * 0.1;

      // Constant slow auto-spin when not dragging
      if (!isDraggingRef.current) {
        targetRotRef.current.y += 0.002;
        targetRotRef.current.x += 0.0005;
      }

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 - 20;
      const scale = Math.min(canvas.width, canvas.height) * 0.5;

      const projected: { sx: number; sy: number; sz: number; c: string }[] = [];

      for (let i = 0; i < curPts.current.length; i++) {
        const cp = curPts.current[i];
        
        // Randomly flip numbers sometimes
        if (Math.random() > 0.99) cp.c = Math.random() > 0.5 ? "0" : "1";

        let x = cp.x, y = cp.y, z = cp.z;
        
        // Rotate Y
        const cos_y = Math.cos(rotRef.current.y), sin_y = Math.sin(rotRef.current.y);
        const x1 = x * cos_y - z * sin_y;
        const z1 = x * sin_y + z * cos_y;
        
        // Rotate X
        const cos_x = Math.cos(rotRef.current.x), sin_x = Math.sin(rotRef.current.x);
        const y2 = y * cos_x - z1 * sin_x;
        const z2 = y * sin_x + z1 * cos_x;

        // Perspective projection
        const fov = 3.5;
        const persp = fov / (fov + z2);
        
        projected.push({
          sx: cx + x1 * persp * scale,
          sy: cy + y2 * persp * scale,
          sz: z2,
          c: cp.c,
        });
      }

      // Z-sort back-to-front for proper rendering
      projected.sort((a, b) => b.sz - a.sz);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      for (const p of projected) {
        // Map z from roughly -0.65..0.65 to 0..1 for depth fading/sizing
        const d = (p.sz + 0.65) / 1.3;
        const alpha = Math.max(0.12, d * 0.98);
        const size = Math.max(5, 18 * d);
        
        ctx.font = `${Math.floor(size)}px monospace`;
        ctx.fillStyle = `rgba(220, 240, 255, ${alpha})`;
        
        if (d > 0.8) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(100, 200, 255, ${alpha * 0.5})`;
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.fillText(p.c, p.sx, p.sy);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.86, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.85 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full h-[240px] sm:h-[280px] flex items-start justify-center mt-0 mb-1"
    >
      {/* Background glow behind the sphere */}
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[420px] cursor-grab active:cursor-grabbing"
        style={{ background: "transparent", touchAction: "none" }}
      />
    </motion.div>
  );
}
