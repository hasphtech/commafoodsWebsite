const stats = [
  { value: "14+", label: "Products" },
  { value: "100%", label: "Natural sourcing" },
  { value: "Pan", label: "India reach" },
];

const values = [
  {
    title: "Farm sourced",
    desc: "Direct from trusted farms across India",
    iconBg: "bg-comma-red-light",
  },
  {
    title: "No artificial colours",
    desc: "Pure products, zero added preservatives",
    iconBg: "bg-[#EAF3DE]",
  },
  {
    title: "Quality tested",
    desc: "Every batch checked before dispatch",
    iconBg: "bg-comma-amber-light",
  },
  {
    title: "Trusted nationally",
    desc: "Available via trade partners across India",
    iconBg: "bg-[#E1F5EE]",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: story copy */}
          <div>
            <p className="label-caps text-comma-amber mb-4">Our story</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900 leading-snug mb-5">
              A comma in every<br />meal, for life
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              A comma isn&apos;t an end — it&apos;s a pause, a breath, a moment
              to savour. Comma Foods was built on the belief that every meal
              deserves that pause — a moment of quality, freshness, and trust.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-9">
              We source directly from farms, process with care, and deliver
              products that carry the goodness of nature to your plate.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <p className="text-2xl font-medium text-comma-red font-serif">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-8 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: value props grid */}
          <div className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-xl p-5"
              >
                <div
                  className={`w-7 h-7 ${v.iconBg} rounded-full mb-3`}
                />
                <p className="text-sm font-medium text-gray-800 mb-1.5">
                  {v.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
