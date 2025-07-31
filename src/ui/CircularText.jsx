import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const getSpinAnimation = (duration) => ({
  rotate: 360,
  transition: {
    ease: "linear",
    duration,
    repeat: Infinity,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const controls = useAnimation();
  const letters = Array.from(text);

  useEffect(() => {
    controls.start(getSpinAnimation(spinDuration));
  }, [spinDuration]);

  const handleHoverStart = () => {
    let newDuration = spinDuration;

    switch (onHover) {
      case "speedUp":
        newDuration = spinDuration / 4;
        break;
      case "slowDown":
        newDuration = spinDuration * 2;
        break;
      case "pause":
        controls.stop();
        return;
      default:
        newDuration = spinDuration;
    }

    controls.start(getSpinAnimation(newDuration));
  };

  const handleHoverEnd = () => {
    controls.start(getSpinAnimation(spinDuration));
  };

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 ">
        {letters.map((letter, i) => {
          const angle = (360 / letters.length) * i;
          const radius = 140; // Avatar radius + border spacing
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <span
              key={i}
              className="absolute text-white text-xl font-mono font-bold "
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                transformOrigin: "center",
              }}
            >
              <span style={{ transform: `rotate(-${angle}deg)` }}>{letter}</span>
            </span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CircularText;
