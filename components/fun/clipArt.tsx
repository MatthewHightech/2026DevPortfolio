/** Tiny pixel-ish SVGs for that GeoCities clip-art energy. */

export function PlaneLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="72"
      height="36"
      viewBox="0 0 72 36"
      aria-hidden
      shapeRendering="crispEdges"
    >
      <rect x="8" y="14" width="48" height="8" fill="#4aa3ff" />
      <rect x="4" y="16" width="8" height="4" fill="#fff" />
      <rect x="52" y="12" width="12" height="12" fill="#2b7fd4" />
      <rect x="56" y="8" width="4" height="4" fill="#2b7fd4" />
      <rect x="20" y="6" width="18" height="8" fill="#6bb6ff" />
      <rect x="22" y="22" width="14" height="6" fill="#6bb6ff" />
      <rect x="48" y="16" width="4" height="4" fill="#ffd24d" />
    </svg>
  );
}

export function PlaneRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="72"
      height="36"
      viewBox="0 0 72 36"
      aria-hidden
      shapeRendering="crispEdges"
    >
      <g transform="scale(-1,1) translate(-72,0)">
        <rect x="8" y="14" width="48" height="8" fill="#4aa3ff" />
        <rect x="4" y="16" width="8" height="4" fill="#fff" />
        <rect x="52" y="12" width="12" height="12" fill="#2b7fd4" />
        <rect x="56" y="8" width="4" height="4" fill="#2b7fd4" />
        <rect x="20" y="6" width="18" height="8" fill="#6bb6ff" />
        <rect x="22" y="22" width="14" height="6" fill="#6bb6ff" />
        <rect x="48" y="16" width="4" height="4" fill="#ffd24d" />
      </g>
    </svg>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="22"
      viewBox="0 0 28 22"
      aria-hidden
      shapeRendering="crispEdges"
    >
      <rect x="2" y="6" width="20" height="14" fill="#ddd" stroke="#888" />
      <rect x="8" y="2" width="8" height="4" fill="#bbb" />
      <rect x="8" y="9" width="8" height="8" fill="#333" />
      <rect x="10" y="11" width="4" height="4" fill="#66ccff" />
      <rect x="22" y="4" width="5" height="8" fill="#ffcc33" />
    </svg>
  );
}

export function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      aria-hidden
      shapeRendering="crispEdges"
    >
      <polygon points="9,1 1,8 17,8" fill="#c44" />
      <rect x="4" y="8" width="10" height="7" fill="#f5e6c8" />
      <rect x="7" y="10" width="4" height="5" fill="#6af" />
    </svg>
  );
}
