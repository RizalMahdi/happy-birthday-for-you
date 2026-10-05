"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  target: string;
  labels: readonly [string, string, string, string];
  passedMessage: string;
};

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return [days, hours, minutes, seconds] as const;
}

export default function Countdown({
  target,
  labels,
  passedMessage,
}: CountdownProps) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const targetTime = new Date(target).getTime();
    const tick = () => setRemaining(targetTime - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const passed = remaining !== null && remaining <= 0;
  const parts =
    remaining === null ? ["--", "--", "--", "--"] : split(remaining);

  if (passed) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white/80 px-8 py-10 text-center shadow-sm backdrop-blur">
        <p className="font-heading text-2xl text-rose-deep md:text-3xl">
          🎉 {passedMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-xl grid-cols-4 gap-2 md:gap-4">
      {parts.map((value, i) => (
        <div
          key={labels[i]}
          className="rounded-2xl border border-line bg-white/80 px-1 py-5 text-center shadow-sm backdrop-blur md:px-3"
        >
          <div className="font-heading text-2xl text-rose-deep tabular-nums md:text-5xl">
            {typeof value === "number"
              ? String(value).padStart(2, "0")
              : value}
          </div>
          <div className="mt-2 text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase md:text-xs">
            {labels[i]}
          </div>
        </div>
      ))}
    </div>
  );
}
