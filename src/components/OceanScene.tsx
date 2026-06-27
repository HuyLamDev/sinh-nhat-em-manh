import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

const creatures = [
  {
    icon: "🪼",
    className: "",
    size: "2.9rem",
    opacity: 0.64,
    top: "11%",
    left: "74%",
    travel: 28,
    delay: 0,
  },
  {
    icon: "🐬",
    className: "",
    size: "2.7rem",
    opacity: 0.72,
    top: "99%",
    left: "78%",
    travel: -34,
    delay: 0.5,
  },
  {
    icon: "🐠",
    className: "",
    size: "2.35rem",
    opacity: 0.6,
    top: "42%",
    left: "84%",
    travel: 36,
    delay: 0.9,
  },
  {
    icon: "🐳",
    className: "sea-creature--optional",
    size: "3rem",
    opacity: 0.54,
    top: "57%",
    left: "76%",
    travel: -40,
    delay: 0.2,
  },
  {
    icon: "🐙",
    className: "",
    size: "2.35rem",
    opacity: 0.6,
    top: "43%",
    left: "39%",
    travel: 36,
    delay: 0.9,
  },
  {
    icon: "🐚",
    className: "sea-creature--optional",
    size: "2rem",
    opacity: 0.62,
    top: "82%",
    left: "11%",
    travel: 20,
    delay: 1.1,
  },
  {
    icon: "🦀",
    className: "sea-creature--optional",
    size: "2rem",
    opacity: 0.62,
    top: "28%",
    left: "06%",
    travel: 20,
    delay: 1.1,
  },
  {
    icon: "⭐",
    className: "",
    size: "2.1rem",
    opacity: 0.66,
    top: "86%",
    left: "84%",
    travel: -22,
    delay: 0.7,
  },
];

export function OceanScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ocean-scene" aria-hidden="true">
      <div className="ocean-rays" />
      <div className="wave-line" style={{ top: "11%" }} />
      <div className="wave-line" style={{ top: "35%" }} />
      <div className="wave-line" style={{ top: "69%" }} />
      <motion.div
        className="bubble"
        style={{ top: "12%", left: "14%", width: 54, height: 54 }}
        animate={reduceMotion ? undefined : { y: [-8, 10, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bubble"
        style={{ top: "29%", right: "12%", width: 36, height: 36 }}
        animate={reduceMotion ? undefined : { y: [8, -12, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bubble"
        style={{ top: "72%", right: "18%", width: 72, height: 72 }}
        animate={reduceMotion ? undefined : { y: [12, -14, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {creatures.map((creature) => (
        <motion.div
          key={`${creature.icon}-${creature.top}`}
          className={`sea-creature ${creature.className}`.trim()}
          style={
            {
              "--creature-size": creature.size,
              "--creature-opacity": creature.opacity,
              top: creature.top,
              left: creature.left,
            } as CSSProperties
          }
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, creature.travel, 0],
                  y: [0, -12, 0],
                  rotate: [-2, 3, -2],
                }
          }
          transition={{
            delay: creature.delay,
            duration: 9 + creature.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {creature.icon}
        </motion.div>
      ))}
    </div>
  );
}
