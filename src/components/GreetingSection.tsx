import { motion, useReducedMotion } from "motion/react";
import { LiquidGlassPanel } from "./LiquidGlassPanel";

export function GreetingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-hero">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LiquidGlassPanel variant="pill" className="eyebrow-pill">
          em Manh's birthday
        </LiquidGlassPanel>
        <h1 className="display-title">Chúc mừng sinh nhật em Manh</h1>
        <p className="lead">
          Một thế giới đại dương nhỏ dành riêng cho em Manh, có những giai điệu
          dễ thương và một tấm thiệp sinh nhật đang chờ được mở.
        </p>
      </motion.div>
    </section>
  );
}
