import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import type { CSSProperties } from "react";
import type { Song } from "../content/songs";
import { LiquidGlassPanel } from "./LiquidGlassPanel";

type MusicPlayerProps = {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  song: Song;
  volume: number;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
  onTogglePlay: () => void;
  onVolumeChange: (volume: number) => void;
};

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function MusicPlayer({
  currentTime,
  duration,
  isPlaying,
  song,
  volume,
  onNext,
  onPrevious,
  onSeek,
  onTogglePlay,
  onVolumeChange,
}: MusicPlayerProps) {
  const progress = duration > 0 ? Math.round((currentTime / duration) * 100) : 0;
  const sliderValue = duration > 0 ? Math.min(currentTime, duration) : 0;

  return (
    <LiquidGlassPanel variant="strong" className="music-player">
      <div className="track-summary">
        <img className="track-art" src={song.thumbnail} alt="" />
        <div>
          <div className="track-kicker">Đang phát</div>
          <h3 className="track-title">{song.title}</h3>
          <div className="track-artist">{song.artist}</div>
        </div>
      </div>

      <div className="progress-control">
        <input
          className="progress-slider"
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={sliderValue}
          aria-label={`Tua ${song.title}`}
          aria-valuetext={`${formatTime(sliderValue)} trên ${formatTime(duration)}`}
          onChange={(event) => onSeek(Number(event.target.value))}
          style={{ "--progress": `${progress}%` } as CSSProperties}
        />
      </div>

      <div className="track-times">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="player-footer">
        <div className="volume-control">
          <Volume2 size={19} strokeWidth={2.2} aria-hidden="true" />
          <input
            className="volume-slider"
            id="music-volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            aria-label="Âm lượng"
            onChange={(event) => onVolumeChange(Number(event.target.value))}
          />
        </div>

        <div className="player-controls" aria-label="Điều khiển nhạc">
          <button
            className="control-button"
            type="button"
            aria-label="Bài trước"
            onClick={onPrevious}
          >
            <SkipBack size={19} strokeWidth={2.2} />
          </button>
          <button
            className="control-button control-button--primary"
            type="button"
            aria-label={isPlaying ? "Tạm dừng" : "Phát nhạc"}
            onClick={onTogglePlay}
          >
            {isPlaying ? (
              <Pause size={24} fill="currentColor" strokeWidth={2.2} />
            ) : (
              <Play size={24} fill="currentColor" strokeWidth={2.2} />
            )}
          </button>
          <button
            className="control-button"
            type="button"
            aria-label="Bài tiếp theo"
            onClick={onNext}
          >
            <SkipForward size={19} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </LiquidGlassPanel>
  );
}
