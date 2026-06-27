import type { Song } from "../content/songs";
import { LiquidGlassPanel } from "./LiquidGlassPanel";

type SongListProps = {
  selectedIndex: number;
  songs: Song[];
  onSelectSong: (index: number) => void;
};

export function SongList({ selectedIndex, songs, onSelectSong }: SongListProps) {
  return (
    <LiquidGlassPanel
      aria-label="Danh sách bài hát"
      className="song-list"
      variant="soft"
    >
      {songs.map((song, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            className={`song-button ${isSelected ? "song-button--active" : ""}`}
            key={song.title}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelectSong(index)}
          >
            <img className="song-thumbnail" src={song.thumbnail} alt="" />
            <span>
              <span className="song-name">{song.title}</span>
              <span className="song-meta">{song.artist}</span>
            </span>
          </button>
        );
      })}
    </LiquidGlassPanel>
  );
}
