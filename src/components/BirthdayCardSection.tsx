import { motion, useReducedMotion } from "motion/react";
import { BirthdayCard } from "./BirthdayCard";

export function BirthdayCardSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section">
      <motion.div
        className="birthday-board-section"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="section-title">Lời chúc cho em Manh</h2>
        <BirthdayCard />
      </motion.div>
    </section>
  );
}
