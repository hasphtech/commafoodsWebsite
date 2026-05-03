const categories = [
  {
    name: "Rice & grains",
    count: 2,
    dotBg: "bg-[#BA7517]",
    iconBg: "bg-[#FAEEDA]",
  },
  {
    name: "Atta & flour",
    count: 3,
    dotBg: "bg-[#C17A3A]",
    iconBg: "bg-[#F9F0E4]",
  },
  {
    name: "Spices & masalas",
    count: 4,
    dotBg: "bg-comma-red",
    iconBg: "bg-comma-red-light",
  },
  {
    name: "Natural & pure",
    count: 1,
    dotBg: "bg-[#3B6D11]",
    iconBg: "bg-[#EAF3DE]",
  },
  {
    name: "Snacks",
    count: 3,
    dotBg: "bg-[#534AB7]",
    iconBg: "bg-[#EEEDFE]",
  },
  {
    name: "Beverages",
    count: 3,
    dotBg: "bg-[#0F6E56]",
    iconBg: "bg-[#E1F5EE]",
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
              className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center hover:border-comma-red/40 hover:shadow-sm transition-all group"
            >
              <div
                className={`w-11 h-11 ${cat.iconBg} rounded-full flex items-center justify-center mb-3`}
              >
                <div className={`w-5 h-5 ${cat.dotBg} rounded-full`} />
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
