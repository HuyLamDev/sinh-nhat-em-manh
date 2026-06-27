import { Mic2 } from "lucide-react";
import { useEffect, useRef } from "react";
import type { LyricTrack } from "../content/lyrics";
import { getActiveLyricIndex } from "../content/lyrics";
import { LiquidGlassPanel } from "./LiquidGlassPanel";

type KaraokePanelProps = {
  currentTime: number;
  track: LyricTrack;
  onSeekToLine: (time: number) => void;
};

export function KaraokePanel({
  currentTime,
  track,
  onSeekToLine,
}: KaraokePanelProps) {
  const activeIndex = getActiveLyricIndex(track.lines, currentTime);
  const linesRef = useRef<HTMLDivElement | null>(null);
  const activeLineRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const lines = linesRef.current;
    const activeLine = activeLineRef.current;

    if (!lines || !activeLine) {
      return;
    }

    const linesRect = lines.getBoundingClientRect();
    const activeLineRect = activeLine.getBoundingClientRect();
    const nextTop =
      lines.scrollTop +
      activeLineRect.top -
      linesRect.top -
      (lines.clientHeight - activeLine.clientHeight) / 2;

    lines.scrollTo({
      top: nextTop,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div>
      <LiquidGlassPanel className="karaoke-panel" variant="soft">
        <div className="karaoke-header">
          <span className="karaoke-icon" aria-hidden="true">
            <Mic2 size={18} strokeWidth={2.2} />
          </span>
          <div>
            <h3 className="karaoke-title">Lời bài hát</h3>
            <p className="karaoke-subtitle">{track.songTitle}</p>
          </div>
        </div>

        <div
          ref={linesRef}
          className="karaoke-lines"
          aria-label="Lời bài hát theo thời gian"
        >
          {track.lines.map((line, index) => {
            const isActive = index === activeIndex;
            const isPassed = index < activeIndex;

            return (
              <button
                ref={isActive ? activeLineRef : undefined}
                className={[
                  "lyric-line",
                  isPassed ? "lyric-line--passed" : "",
                  isActive ? "lyric-line--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={`${track.songTitle}-${line.time}`}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSeekToLine(line.time)}
              >
                <span className="lyric-text">{line.text}</span>
              </button>
            );
          })}
        </div>
      </LiquidGlassPanel>
    </div>
  );
}
