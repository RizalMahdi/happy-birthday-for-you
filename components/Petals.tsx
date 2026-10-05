const PETALS = Array.from({ length: 12 }, (_, i) => ({
  left: (i * 8 + 4) % 96,
  delay: i * 2.2,
  duration: 13 + (i % 5) * 3,
  size: 12 + (i % 4) * 5,
  emoji: i % 3 === 0 ? "🌷" : "🌸",
}));

export default function Petals() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="animate-petal absolute top-0"
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
