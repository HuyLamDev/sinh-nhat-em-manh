import { motion, useReducedMotion } from "motion/react";
import { memoryBoard } from "../content/memoryBoard";

export function BirthdayCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="birthday-card memory-board"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <span className="memory-board__bubble memory-board__bubble--top" />
      <span className="memory-board__bubble memory-board__bubble--bottom" />

      <div className="memory-note">
        <span className="memory-note__tape" aria-hidden="true" />
        <h3 className="memory-note__title">{memoryBoard.noteTitle}</h3>
        {memoryBoard.noteParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="memory-polaroids" aria-label="Khung ảnh kỷ niệm">
        {memoryBoard.polaroids.map((polaroid) => (
          <figure
            className={["memory-polaroid", polaroid.className].join(" ")}
            key={polaroid.src}
          >
            <span className="memory-polaroid__pin" aria-hidden="true" />
            <img src={polaroid.src} alt={polaroid.alt} />
            <figcaption>{polaroid.caption}</figcaption>
          </figure>
        ))}
      </div>
    </motion.div>
  );
}
