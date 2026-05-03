import Image from "next/image";

const products = [
  {
    category: "Rice & grains",
    name: "Basmati Rice",
    desc: "Extra long grain · 5kg",
    img: "/images/products/basmati-rice.png",
    bg: "bg-[#F9F0E4]",
  },
  {
    category: "Atta & flour",
    name: "Chakki Fresh Atta",
    desc: "100% whole wheat · 5kg",
    img: "/images/products/chakki-fresh-atta.png",
    bg: "bg-[#FFF4F4]",
  },
  {
    category: "Atta & flour",
    name: "Whole Wheat Atta",
    desc: "100% MP Sharbati · 5kg",
    img: "/images/products/whole-wheat-atta.png",
    bg: "bg-[#FFF8F4]",
  },
  {
    category: "Natural & pure",
    name: "Pure Jaggery",
    desc: "Chemical free · 1kg",
    img: "/images/products/jaggery.png",
    bg: "bg-[#FFFAEC]",
  },
  {
    category: "Spices & masalas",
    name: "Turmeric Powder",
    desc: "Pure & natural · 200g",
    img: "/images/products/turmeric-powder.png",
    bg: "bg-[#F4F9ED]",
  },
  {
    category: "Spices & masalas",
    name: "Red Chilli Powder",
    desc: "Pure & natural · 200g",
    img: "/images/products/red-chilli-powder.png",
    bg: "bg-[#FFF2F2]",
  },
  {
    category: "Beverages",
    name: "Premium Tea",
    desc: "Strong & refreshing · 250g",
    img: "/images/products/premium-tea.png",
    bg: "bg-[#EAF3DE]",
  },
  {
    category: "Snacks",
    name: "Masala Munch",
    desc: "Crispy & tasty",
    img: "/images/products/masala-munch.png",
    bg: "bg-[#FFFAEC]",
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
              className="border border-gray-100 rounded-xl overflow-hidden hover:border-comma-red/30 hover:shadow-sm transition-all"
            >
              {/* Product image */}
              <div className={`${p.bg} h-40 relative`}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                />
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
