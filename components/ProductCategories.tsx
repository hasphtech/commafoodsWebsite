const categories = [
  {
    name: "Rice & grains",
    count: 2,
    iconBg: "bg-[#FAEEDA]",
    iconColor: "#BA7517",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="3" ry="5" fill="currentColor" opacity="0.9"/>
        <ellipse cx="6" cy="9" rx="2.5" ry="4.5" fill="currentColor" opacity="0.7" transform="rotate(-20 6 9)"/>
        <ellipse cx="18" cy="9" rx="2.5" ry="4.5" fill="currentColor" opacity="0.7" transform="rotate(20 18 9)"/>
        <rect x="11" y="10" width="2" height="9" rx="1" fill="currentColor" opacity="0.5"/>
        <path d="M8 19 Q12 22 16 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Atta & flour",
    count: 3,
    iconBg: "bg-[#F9F0E4]",
    iconColor: "#C17A3A",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 C12 2 9 6 9 10 L15 10 C15 6 12 2 12 2Z" fill="currentColor" opacity="0.85"/>
        <rect x="8" y="10" width="8" height="10" rx="2" fill="currentColor" opacity="0.75"/>
        <path d="M10 13 L14 13 M10 16 L13 16" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M6 8 Q8 6 10 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Spices & masalas",
    count: 4,
    iconBg: "bg-comma-red-light",
    iconColor: "#A32D2D",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2 C13 2 16 5 15 9 C14.5 11 13 12 12 12 C10 12 8 10 9 7 C10 4 13 2 13 2Z" fill="currentColor" opacity="0.9"/>
        <path d="M9 7 C7 8 6 10 7 12 C8 14 10 14 11 13" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
        <ellipse cx="12" cy="17" rx="4" ry="3" fill="currentColor" opacity="0.6"/>
        <rect x="10" y="14" width="4" height="3" fill="currentColor" opacity="0.5"/>
        <circle cx="14" cy="5" r="1" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Natural & pure",
    count: 1,
    iconBg: "bg-[#EAF3DE]",
    iconColor: "#3B6D11",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 C12 3 4 8 4 15 C4 19 7.5 22 12 22 C16.5 22 20 19 20 15 C20 8 12 3 12 3Z" fill="currentColor" opacity="0.25"/>
        <path d="M12 4 C12 4 7 9 7 15 C7 18 9 20 12 20 C15 20 17 18 17 15 C17 9 12 4 12 4Z" fill="currentColor" opacity="0.5"/>
        <path d="M12 6 C12 6 9 10 9 15 C9 17.5 10.5 19 12 19 C13.5 19 15 17.5 15 15 C15 10 12 6 12 6Z" fill="currentColor" opacity="0.85"/>
        <path d="M12 10 L12 21" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Snacks",
    count: 3,
    iconBg: "bg-[#EEEDFE]",
    iconColor: "#534AB7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 4 L17 4 L19 8 L5 8 Z" fill="currentColor" opacity="0.6"/>
        <rect x="5" y="8" width="14" height="12" rx="2" fill="currentColor" opacity="0.75"/>
        <path d="M9 12 C9 12 10.5 14 12 12 C13.5 10 15 12 15 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <circle cx="12" cy="16" r="1.5" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Beverages",
    count: 3,
    iconBg: "bg-[#E1F5EE]",
    iconColor: "#0F6E56",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3 L15 3 L16 7 L8 7 Z" fill="currentColor" opacity="0.5"/>
        <rect x="7" y="7" width="10" height="14" rx="3" fill="currentColor" opacity="0.75"/>
        <path d="M10 11 Q12 13 14 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <circle cx="12" cy="16" r="2" fill="white" opacity="0.6"/>
        <path d="M16 9 L18 9 C19 9 19 12 17 12 L16 12" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-16 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="label-caps text-comma-amber mb-3">Our range</p>
          <h2 className="font-serif text-3xl font-medium text-gray-900">
            Everything for your kitchen
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center hover:border-comma-red/40 transition-all group"
            >
              <div
                className={`w-12 h-12 ${cat.iconBg} rounded-full flex items-center justify-center mb-3`}
                style={{ color: cat.iconColor }}
              >
                {cat.icon}
              </div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                {cat.name}
              </p>
              <p className="text-xs text-gray-400">{cat.count} products</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
