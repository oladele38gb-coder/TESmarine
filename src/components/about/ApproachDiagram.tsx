/**
 * Isometric stack of four layers, one per item in the "How we deliver" list (Subsea 7 style 3D diagram).
 * Pure SVG, no animation, so it respects reduced motion by default. Decorative: the list beside it carries the meaning.
 */
const layers = [
  { label: "Fleet", top: "#488ED3", side: "#3473C2", front: "#2B5FA3" },
  { label: "People", top: "#BEE6F1", side: "#9CCFE0", front: "#7FB9CF" },
  { label: "Systems", top: "#373C99", side: "#2C3080", front: "#222668" },
  { label: "Nigerian content", top: "#F47C20", side: "#D96A15", front: "#B9590F" },
];

const W = 360; // diamond width
const H = 180; // diamond height (2:1 isometric)
const T = 34; // slab thickness
const GAP = 34; // vertical gap between slabs

export function ApproachDiagram() {
  const cx = 230;
  const step = T + GAP;
  const height = H + layers.length * step + 20;

  return (
    <svg viewBox={`0 0 520 ${height}`} className="h-auto w-full" aria-hidden="true">
      {/* Draw bottom layer first so upper layers overlap it. */}
      {layers
        .map((l, i) => ({ ...l, i }))
        .reverse()
        .map(({ label, top, side, front, i }) => {
          const y = 10 + i * step; // top vertex of this slab
          const topFace = `${cx},${y} ${cx + W / 2},${y + H / 2} ${cx},${y + H} ${cx - W / 2},${y + H / 2}`;
          const left = `${cx - W / 2},${y + H / 2} ${cx},${y + H} ${cx},${y + H + T} ${cx - W / 2},${y + H / 2 + T}`;
          const right = `${cx},${y + H} ${cx + W / 2},${y + H / 2} ${cx + W / 2},${y + H / 2 + T} ${cx},${y + H + T}`;
          return (
            <g key={label}>
              <polygon points={left} fill={front} />
              <polygon points={right} fill={side} />
              <polygon points={topFace} fill={top} stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
              {/* Leader line and label to the right */}
              <line x1={cx + W / 2} y1={y + H / 2 + T / 2} x2={cx + W / 2 + 22} y2={y + H / 2 + T / 2} stroke="#14183F" strokeWidth="1" />
              <text
                x={cx + W / 2 + 26}
                y={y + H / 2 + T / 2 + 4}
                fill="#14183F"
                fontSize="13"
                fontFamily="var(--font-label)"
                fontWeight="700"
                letterSpacing="1.5"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
    </svg>
  );
}
