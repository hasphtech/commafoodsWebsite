import Image from "next/image";

const heroProducts = [
  {
    name: "Basmati Rice",
    sub: "Extra long grain",
    bg: "bg-[#F9F0E4]",
    border: "border-[#E8D0B0]",
  },
  {
    name: "Chakki Atta",
    sub: "100% whole wheat",
    bg: "bg-[#FFF4F4]",
    border: "border-[#F0C0B0]",
  },
  {
    name: "Turmeric Powder",
    sub: "Pure & natural",
    bg: "bg-[#F4F9ED]",
    border: "border-[#C0D8A0]",
  },
  {
    name: "Pure Jaggery",
    sub: "Chemical free",
    bg: "bg-[#FFFAEC]",
    border: "border-[#E8D890]",
  },
];

export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left: copy */}
          <div className="flex-1">
            <p className="label-caps text-comma-amber mb-5">
              Quality you can trust
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-6">
              Pure ingredients,<br />
              trusted in every<br />
              Indian kitchen
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-9 max-w-md">
              From farm-fresh basmati rice to hand-picked spices, Comma Foods
              brings quality you can taste — straight to your table.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#products"
                className="bg-comma-red text-white text-sm px-6 py-3 rounded-md hover:bg-comma-red-dark transition-colors"
              >
                Explore products
              </a>
              <a
                href="#about"
                className="border border-gray-300 text-gray-700 text-sm px-6 py-3 rounded-md hover:border-gray-400 transition-colors"
              >
                Our story
              </a>
            </div>
          </div>

          {/* Right: 2×2 product preview tiles with real logo */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-3">
              {heroProducts.map((p) => (
                <div
                  key={p.name}
                  className={`${p.bg} border ${p.border} rounded-xl p-5 flex flex-col items-center text-center`}
                >
                  <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-3 border border-gray-100">
                    <Image
                      src="/images/logo.png"
                      alt="Comma Foods"
                      width={40}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full product lineup image */}
        <div className="mt-14 rounded-2xl overflow-hidden border border-gray-100">
          <Image
            src="/images/products-lineup.png"
            alt="Full Comma Foods product lineup"
            width={1440}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
