"use client";

export function SnakeBorder({ active }: { active: boolean }) {
  return (
    <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <rect x="1.2" y="1.2" width="97.6" height="97.6" fill="none" stroke="rgba(201,162,39,0.22)" strokeWidth="0.55" vectorEffect="non-scaling-stroke" />
      {active ? (
        <rect
          x="1.2"
          y="1.2"
          width="97.6"
          height="97.6"
          fill="none"
          stroke="#e8c766"
          strokeWidth="1.1"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          className="snake-trace"
        />
      ) : null}
    </svg>
  );
}
