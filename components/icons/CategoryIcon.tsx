export type CategoryId =
  | "rice"
  | "atta"
  | "spices"
  | "natural"
  | "snacks"
  | "beverages";

interface Props {
  category: CategoryId;
  size?: number;
}

const RiceIcon = () => (
  <>
    {/* Bowl */}
    <ellipse cx="50" cy="68" rx="32" ry="14" fill="#BA7517" />
    <path d="M18 68 Q22 88 50 90 Q78 88 82 68 Z" fill="#9A5E10" />
    {/* Rice grains fanned above bowl */}
    <ellipse cx="36" cy="50" rx="5" ry="12" fill="#E8D8A0" transform="rotate(-25 36 50)" />
    <ellipse cx="50" cy="44" rx="5" ry="13" fill="#F0E4B0" />
    <ellipse cx="64" cy="50" rx="5" ry="12" fill="#E8D8A0" transform="rotate(25 64 50)" />
    {/* Bowl highlight */}
    <ellipse cx="50" cy="65" rx="28" ry="10" fill="#D4900C" />
    {/* Base */}
    <rect x="40" y="82" width="20" height="4" rx="2" fill="#9A5E10" />
  </>
);

const AttaIcon = () => (
  <>
    {/* Stalk */}
    <line x1="50" y1="88" x2="50" y2="18" stroke="#C17A3A" strokeWidth="3.5" strokeLinecap="round" />
    {/* Top grain cluster */}
    <ellipse cx="50" cy="24" rx="8" ry="13" fill="#C17A3A" />
    {/* Left grains */}
    <ellipse cx="36" cy="35" rx="7" ry="11" fill="#C17A3A" transform="rotate(-30 36 35)" />
    <ellipse cx="32" cy="50" rx="6" ry="10" fill="#BA7020" transform="rotate(-25 32 50)" />
    {/* Right grains */}
    <ellipse cx="64" cy="35" rx="7" ry="11" fill="#C17A3A" transform="rotate(30 64 35)" />
    <ellipse cx="68" cy="50" rx="6" ry="10" fill="#BA7020" transform="rotate(25 68 50)" />
    {/* Leaves */}
    <path d="M50 62 Q32 56 28 68 Q40 70 50 62Z" fill="#8B6020" />
    <path d="M50 62 Q68 56 72 68 Q60 70 50 62Z" fill="#A07030" />
  </>
);

const SpicesIcon = () => (
  <>
    {/* Chili pepper body */}
    <path
      d="M50 82 C34 82 20 64 24 42 C28 22 44 12 56 18 C68 24 74 42 69 60 C64 78 66 82 50 82Z"
      fill="#A32D2D"
    />
    {/* Highlight streak */}
    <path
      d="M36 44 C33 36 38 26 45 22"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Tip */}
    <path d="M50 82 Q52 92 48 93 Q46 87 50 82Z" fill="#7B2020" />
    {/* Stem */}
    <path d="M56 18 C56 18 60 10 68 8 C63 13 59 15 57 18Z" fill="#2D5A1A" />
    <path d="M56 18 C56 18 52 8 54 3 C56 9 56 14 57 18Z" fill="#3A7A28" />
    {/* Seeds hint */}
    <ellipse cx="48" cy="50" rx="3" ry="2" fill="rgba(255,220,180,0.4)" />
    <ellipse cx="52" cy="62" rx="3" ry="2" fill="rgba(255,220,180,0.4)" />
  </>
);

const NaturalIcon = () => (
  <>
    {/* Jaggery block */}
    <rect x="18" y="46" width="64" height="38" rx="8" fill="#A8681A" />
    <rect x="20" y="48" width="60" height="34" rx="7" fill="#C47E28" />
    {/* Texture */}
    <line x1="28" y1="56" x2="72" y2="56" stroke="#A8681A" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="28" y1="65" x2="72" y2="65" stroke="#A8681A" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="28" y1="74" x2="72" y2="74" stroke="#A8681A" strokeWidth="1.5" strokeOpacity="0.5" />
    {/* Leaf */}
    <path d="M50 46 C50 46 30 30 34 12 C40 22 50 35 50 46Z" fill="#3B6D11" />
    <path d="M50 46 C50 46 70 30 66 12 C60 22 50 35 50 46Z" fill="#4E8E18" />
    {/* Leaf vein */}
    <line x1="50" y1="46" x2="50" y2="12" stroke="#2D5A0D" strokeWidth="1.5" strokeOpacity="0.6" />
    {/* Shine on block */}
    <path d="M24 52 Q50 48 76 52" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
  </>
);

const SnacksIcon = () => (
  <>
    {/* Bag */}
    <path d="M30 22 L70 22 L76 82 L24 82 Z" fill="#534AB7" />
    {/* Top seal clip */}
    <rect x="28" y="14" width="44" height="11" rx="5.5" fill="#3D35A0" />
    {/* Label window */}
    <rect x="32" y="34" width="36" height="30" rx="5" fill="rgba(255,255,255,0.18)" />
    {/* Snack dots */}
    <circle cx="42" cy="47" r="4.5" fill="rgba(255,255,255,0.55)" />
    <circle cx="52" cy="42" r="3.5" fill="rgba(255,255,255,0.55)" />
    <circle cx="61" cy="49" r="4" fill="rgba(255,255,255,0.55)" />
    <circle cx="45" cy="56" r="3.5" fill="rgba(255,255,255,0.55)" />
    <circle cx="57" cy="57" r="4" fill="rgba(255,255,255,0.55)" />
    {/* Bag crease lines */}
    <line x1="30" y1="22" x2="24" y2="82" stroke="#3D35A0" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="70" y1="22" x2="76" y2="82" stroke="#3D35A0" strokeWidth="1" strokeOpacity="0.5" />
  </>
);

const BeveragesIcon = () => (
  <>
    {/* Cup body */}
    <path d="M22 46 L28 84 L72 84 L78 46 Z" fill="#0F6E56" />
    {/* Cup rim */}
    <rect x="20" y="40" width="60" height="9" rx="4.5" fill="#0A5240" />
    {/* Handle */}
    <path
      d="M72 55 C88 55 92 67 86 74 C82 80 74 79 72 74"
      stroke="#0A5240"
      strokeWidth="5.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Tea liquid */}
    <path d="M28 56 L33 84 L67 84 L72 56 Z" fill="#9A5820" fillOpacity="0.85" />
    {/* Steam */}
    <path d="M36 37 C36 33 40 29 36 24" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
    <path d="M50 35 C50 31 54 27 50 22" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
    <path d="M64 37 C64 33 68 29 64 24" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
  </>
);

const iconMap: Record<CategoryId, { bg: string; el: React.ReactNode }> = {
  rice:      { bg: "#FAEEDA", el: <RiceIcon /> },
  atta:      { bg: "#F9F0E4", el: <AttaIcon /> },
  spices:    { bg: "#FCEBEB", el: <SpicesIcon /> },
  natural:   { bg: "#EAF3DE", el: <NaturalIcon /> },
  snacks:    { bg: "#EEEDFE", el: <SnacksIcon /> },
  beverages: { bg: "#E1F5EE", el: <BeveragesIcon /> },
};

export default function CategoryIcon({ category, size = 56 }: Props) {
  const { bg, el } = iconMap[category];
  return (
    <div
      style={{ width: size, height: size, background: bg }}
      className="rounded-full flex items-center justify-center shrink-0"
    >
      <svg viewBox="0 0 100 100" width={size * 0.62} height={size * 0.62}>
        {el}
      </svg>
    </div>
  );
}
