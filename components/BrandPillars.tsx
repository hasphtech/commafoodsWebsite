const pillars = [
  "No artificial colours",
  "Farm sourced",
  "Trusted quality",
  "Pan-India reach",
];

export default function BrandPillars() {
  return (
    <div className="bg-comma-red py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {pillars.map((pillar, i) => (
            <div key={pillar} className="flex items-center gap-8">
              <span className="text-white label-caps">{pillar}</span>
              {i < pillars.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
