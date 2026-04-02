import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Assets
import neutralImg from "../assets/ai-face/neutral.png";
import happyImg from "../assets/ai-face/happy.png";
import sadImg from "../assets/ai-face/sad.png";
import shatterImg from "../assets/ai-face/shatter.png";

const faceAssets = {
  NEUTRAL: neutralImg,
  HAPPY: happyImg,
  SAD: sadImg,
  SHATTER: shatterImg,
};

const HighFidelityAIFace = () => {
  const [stateIdx, setStateIdx] = useState(0);
  // Paced cycle: Neutral -> Happy -> Neutral -> Sad -> Neutral -> Shatter
  const states: (keyof typeof faceAssets)[] = [
    "NEUTRAL", "HAPPY", "NEUTRAL", "SAD", "NEUTRAL", "SHATTER"
  ];
  
  // Interactive Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 120 });
  
  const rotateX = useTransform(springY, [-500, 500], [8, -8]);
  const rotateY = useTransform(springX, [-500, 500], [-12, 12]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStateIdx((prev) => (prev + 1) % states.length);
    }, 7000); // 7s for slow, cinematic look

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentState = states[stateIdx];

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center overflow-visible my-12 perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[900px] aspect-square flex items-center justify-center p-8"
      >
        {/* Cinematic Backdrop Glow */}
        <div className="absolute inset-0 bg-primary/10 blur-[180px] rounded-full scale-125 pointer-events-none -z-10" />
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentState}
            src={faceAssets[currentState]}
            alt={`AI Face ${currentState}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="w-full h-full object-contain pointer-events-none mix-blend-screen"
            style={{
              filter: "drop-shadow(0 0 30px rgba(100, 200, 255, 0.3)) brightness(1.1)",
            }}
          />
        </AnimatePresence>

        {/* Floating Matrix Particles Overlay */}
        <div className="absolute inset-0 z-10 opacity-30 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[9px] font-mono text-primary/60"
              initial={{ 
                x: Math.random() * 900, 
                y: Math.random() * 900,
                opacity: 0
              }}
              animate={{ 
                y: [null, Math.random() * 900],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                duration: 6 + Math.random() * 8, 
                repeat: Infinity,
                delay: Math.random() * 6
              }}
            >
              {[0, 1, 'X', 'Y', 'Z'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        {/* Global Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </motion.div>
    </div>
  );
};

export default HighFidelityAIFace;
