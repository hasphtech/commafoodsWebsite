// Simplified Comma Foods brand flame+comma mark — used inside product packages
interface Props {
  color?: string;
  size?: number;
}

export default function CommaMark({ color = "white", size = 28 }: Props) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flame body */}
      <path
        d="M14 1 C14 1, 25 9, 25 18 C25 25.5 20 30 14 30 C8 30 3 25.5 3 18 C3 9 14 1 14 1Z"
        fill={color}
        fillOpacity="0.95"
      />
      {/* Inner comma curl */}
      <circle cx="14" cy="22" r="4.5" fill={color === "white" ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.25)"} />
      <path
        d="M14 26.5 C14 26.5 11 29.5 11 32"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
