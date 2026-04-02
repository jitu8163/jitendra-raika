import { motion } from "framer-motion";

const blobs = [
  { color: "hsl(270 80% 60% / 0.12)", size: 600, x: "5%", y: "10%", duration: 20 },
  { color: "hsl(220 90% 55% / 0.10)", size: 500, x: "65%", y: "25%", duration: 25 },
  { color: "hsl(180 70% 45% / 0.08)", size: 550, x: "25%", y: "55%", duration: 22 },
  { color: "hsl(330 80% 60% / 0.07)", size: 450, x: "70%", y: "75%", duration: 28 },
  { color: "hsl(250 70% 50% / 0.06)", size: 400, x: "40%", y: "40%", duration: 30 },
];

const GradientBlobs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,80%,12%)] via-[hsl(240,30%,8%)] to-[hsl(200,50%,8%)]" />

    {/* Radial accents */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(270,80%,20%,0.35),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(180,70%,15%,0.25),transparent_60%)]" />

    {/* Animated blobs */}
    {blobs.map((b, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: b.size,
          height: b.size,
          left: b.x,
          top: b.y,
          background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, -40, 30, 0],
          y: [0, -50, 30, -60, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{
          duration: b.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default GradientBlobs;
