import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub,
  FaTerminal, FaCode, FaDatabase, FaLaptopCode, FaCloud, FaLink, FaRobot, FaQrcode
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql
} from 'react-icons/si';
import { FiPieChart } from 'react-icons/fi';

// All requested icons
const techIcons = [
  <FaGithub />, <FaReact />, <SiJavascript />, <FaHtml5 />, <FaCss3Alt />, 
  <SiTailwindcss />, <FaNodeJs />, <SiExpress />, <SiMongodb />, <SiMysql />, 
  <FaJava />, <FaGitAlt />, <FaTerminal />, <FaCode />, 
  <FaDatabase />, <FaLaptopCode />, <FaCloud />, <FaRobot />, <FaQrcode />, 
  <FaLink />, <FiPieChart />
];

// Generates a random number within a range
const randomRange = (min, max) => Math.random() * (max - min) + min;

const FloatingElement = ({ el, smoothMouseX, smoothMouseY, windowWidth, windowHeight }) => {
  const xOffset = useTransform(smoothMouseX, [0, windowWidth], [el.depth * 50, -el.depth * 50]);
  const yOffset = useTransform(smoothMouseY, [0, windowHeight], [el.depth * 50, -el.depth * 50]);

  return (
    <motion.div
      className={`absolute ${el.blur}`}
      style={{
        left: `${el.startX}vw`,
        top: `${el.startY}vh`,
        opacity: el.opacity,
        x: xOffset,
        y: yOffset,
      }}
      animate={{
        x: [0, `${el.xMovement}vw`, 0],
        y: [0, `${el.yMovement}vh`, 0],
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: el.floatDuration,
        repeat: Infinity,
        delay: el.floatDelay,
        ease: "linear",
      }}
    >
      {el.isIcon ? (
        <div 
          className="text-slate-900 dark:text-white transition-colors duration-700" 
          style={{ fontSize: `${el.size}px` }}
        >
          {el.icon}
        </div>
      ) : (
        <div 
          className="bg-slate-800 dark:bg-white transition-colors duration-700"
          style={{
            width: el.shapeType === 'circle' ? `${el.size}px` : '4px',
            height: el.shapeType === 'circle' ? `${el.size}px` : '4px',
            borderRadius: el.shapeType === 'circle' ? '50%' : '2px',
            boxShadow: el.shapeType === 'star' ? '0 0 10px 2px currentColor' : 'none'
          }}
        />
      )}
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const [elements, setElements] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Generate static random properties on mount to avoid hydration mismatch and re-renders
    const generatedElements = Array.from({ length: 40 }).map((_, i) => {
      const isIcon = i < 20; // 20 icons, 20 decorative shapes
      const iconIndex = i % techIcons.length;
      
      const size = isIcon ? randomRange(24, 48) : randomRange(10, 100);
      const startX = randomRange(0, 100);
      const startY = randomRange(0, 100);
      
      // Floating animation values
      const floatDuration = randomRange(20, 50);
      const floatDelay = randomRange(0, 10);
      const xMovement = randomRange(-30, 30); 
      const yMovement = randomRange(-30, 30);
      
      // Parallax intensity based on simulated depth
      const depth = randomRange(0.2, 1.5);
      const blur = depth < 0.5 ? 'blur-[1px]' : depth > 1.2 ? 'blur-[4px]' : 'blur-none';
      const opacity = randomRange(0.05, 0.15);
      
      // Decorative type
      const shapeTypes = ['circle', 'star', 'sparkle'];
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

      return {
        id: i,
        isIcon,
        icon: isIcon ? techIcons[iconIndex] : null,
        shapeType,
        size,
        startX,
        startY,
        floatDuration,
        floatDelay,
        xMovement,
        yMovement,
        depth,
        blur,
        opacity
      };
    });

    setElements(generatedElements);
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700 bg-slate-50 dark:bg-slate-900">
      
      {/* Subtle dotted grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      {/* Background Gradients (Light & Dark theme specific) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-cyan-900/30 blur-[100px] transition-colors duration-700"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-indigo-900/30 blur-[120px] transition-colors duration-700"></div>
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-400/10 dark:bg-blue-900/20 blur-[90px] transition-colors duration-700"></div>

      {/* Floating Elements with Parallax */}
      {elements.map((el) => (
        <FloatingElement 
          key={el.id} 
          el={el} 
          smoothMouseX={smoothMouseX} 
          smoothMouseY={smoothMouseY} 
          windowWidth={windowSize.width}
          windowHeight={windowSize.height}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
