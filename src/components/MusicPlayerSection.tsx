import { useEffect, useMemo, useRef, useState } from "react";
import { getLyricTrack } from "../content/lyrics";
import { songs } from "../content/songs";
import { KaraokePanel } from "./KaraokePanel";
import { MusicPlayer } from "./MusicPlayer";
import { SongList } from "./SongList";

export function MusicPlayerSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  const [volume, setVolume] = useState(72);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const selectedSong = songs[selectedIndex];
  const lyricTrack = useMemo(
    () => getLyricTrack(selectedSong.title),
    [selectedSong.title],
  );

  useEffect(() => {
    setCurrentTime(0);
    setPlaybackDuration(lyricTrack.duration);
  }, [lyricTrack.duration, selectedIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !selectedSong.audioSrc) {
      return;
    }

    if (isPlaying) {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    audio.pause();
  }, [isPlaying, selectedSong.audioSrc]);

  useEffect(() => {
    if (!isPlaying || selectedSong.audioSrc) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentTime((time) => {
        if (time >= lyricTrack.duration) {
          setIsPlaying(false);
          return lyricTrack.duration;
        }

        return Math.min(time + 1, lyricTrack.duration);
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying, lyricTrack.duration, selectedSong.audioSrc]);

  const selectSong = (index: number) => {
    setSelectedIndex(index);
    setIsPlaying(true);
  };

  const goToPreviousSong = () => {
    setSelectedIndex((current) =>
      current === 0 ? songs.length - 1 : current - 1,
    );
    setIsPlaying(true);
  };

  const goToNextSong = () => {
    setSelectedIndex((current) =>
      current === songs.length - 1 ? 0 : current + 1,
    );
    setIsPlaying(true);
  };

  const seekToTime = (time: number) => {
    const duration = playbackDuration || lyricTrack.duration;
    const nextTime = Math.min(Math.max(time, 0), duration);

    if (audioRef.current && selectedSong.audioSrc) {
      audioRef.current.currentTime = nextTime;
    }

    setCurrentTime(nextTime);
  };

  const seekToLyric = (time: number) => {
    seekToTime(time);
    setIsPlaying(true);
  };

  return (
    <section className="section section-music">
      <div>
        <h2 className="section-title">Playlist sinh nhật</h2>
        {selectedSong.audioSrc ? (
          <audio
            key={selectedSong.audioSrc}
            ref={audioRef}
            preload="metadata"
            src={selectedSong.audioSrc}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={(event) => {
              const duration = event.currentTarget.duration;
              setPlaybackDuration(
                Number.isFinite(duration) ? duration : lyricTrack.duration,
              );
            }}
            onTimeUpdate={(event) => {
              setCurrentTime(event.currentTarget.currentTime);
            }}
          />
        ) : null}
        <div className="music-grid">
          <MusicPlayer
            currentTime={currentTime}
            duration={playbackDuration || lyricTrack.duration}
            isPlaying={isPlaying}
            song={selectedSong}
            volume={volume}
            onNext={goToNextSong}
            onPrevious={goToPreviousSong}
            onSeek={seekToTime}
            onVolumeChange={setVolume}
            onTogglePlay={() => setIsPlaying((current) => !current)}
          />
          <SongList
            selectedIndex={selectedIndex}
            songs={songs}
            onSelectSong={selectSong}
          />
        </div>
        <KaraokePanel
          currentTime={currentTime}
          track={lyricTrack}
          onSeekToLine={seekToLyric}
        />
      </div>
    </section>
  );
}
