const products = [
  {
    category: "Rice & grains",
    name: "Basmati Rice",
    desc: "Extra long grain · 5kg",
    cardBg: "bg-[#F9F0E4]",
    pkgColor: "bg-[#DDB870]",
  },
  {
    category: "Atta & flour",
    name: "Chakki Fresh Atta",
    desc: "100% whole wheat · 5kg",
    cardBg: "bg-[#FFF4F4]",
    pkgColor: "bg-[#E0A080]",
  },
  {
    category: "Atta & flour",
    name: "Whole Wheat Atta",
    desc: "100% MP Sharbati · 5kg",
    cardBg: "bg-[#FFF8F4]",
    pkgColor: "bg-[#C89070]",
  },
  {
    category: "Natural & pure",
    name: "Pure Jaggery",
    desc: "Chemical free · 1kg",
    cardBg: "bg-[#FFFAEC]",
    pkgColor: "bg-[#D0A830]",
  },
  {
    category: "Spices & masalas",
    name: "Turmeric Powder",
    desc: "Pure & natural · 200g",
    cardBg: "bg-[#F4F9ED]",
    pkgColor: "bg-[#98C060]",
  },
  {
    category: "Spices & masalas",
    name: "Red Chilli Powder",
    desc: "Pure & natural · 200g",
    cardBg: "bg-[#FFF2F2]",
    pkgColor: "bg-[#E05040]",
  },
  {
    category: "Beverages",
    name: "Premium Tea",
    desc: "Strong & refreshing · 250g",
    cardBg: "bg-[#EAF3DE]",
    pkgColor: "bg-[#6A9A40]",
  },
  {
    category: "Snacks",
    name: "Masala Munch",
    desc: "Crispy & tasty",
    cardBg: "bg-[#FFFAEC]",
    pkgColor: "bg-[#E8A030]",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex items-end justify-between mb-9">
          <div>
            <p className="label-caps text-comma-amber mb-2">Bestsellers</p>
            <h2 className="font-serif text-3xl font-medium text-gray-900">
              Featured products
            </h2>
          </div>
          <a
            href="#products"
            className="text-sm text-comma-red hover:underline hidden sm:block"
          >
            View all →
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-comma-red/30 transition-colors group"
            >
              {/* Image area */}
              <div
                className={`${p.cardBg} h-28 flex items-center justify-center`}
              >
                <div
                  className={`${p.pkgColor} w-12 h-16 rounded-t-sm rounded-b-2xl flex items-center justify-center`}
                >
                  <div className="w-5 h-5 rounded-full bg-comma-red opacity-70" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 bg-gray-50">
                <p className="label-caps text-comma-amber mb-1.5">
                  {p.category}
                </p>
                <p className="text-sm font-medium text-gray-800 mb-1">
                  {p.name}
                </p>
                <p className="text-xs text-gray-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
