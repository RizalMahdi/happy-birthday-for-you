"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import { content } from "@/lib/content";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = 0.65;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setMissing(false);
    } catch {
      setMissing(true);
      setPlaying(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2">
      {missing ? (
        <span className="rounded-full border border-line bg-white/90 px-3 py-2 text-[11px] text-muted-foreground shadow-sm backdrop-blur md:text-xs">
          {content.song.placeholderHint}
        </span>
      ) : (
        <span className="hidden rounded-full border border-line bg-white/90 px-3 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur sm:inline">
          {content.song.title}
        </span>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Jeda musik" : "Putar musik"}
        className="grid size-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {playing ? (
          <Pause className="size-6" />
        ) : missing ? (
          <Music className="size-6" />
        ) : (
          <Play className="size-6 translate-x-0.5" />
        )}
      </button>

      <audio
        ref={audioRef}
        src={content.song.src}
        loop
        preload="none"
        onError={() => setMissing(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
}
