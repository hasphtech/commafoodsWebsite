export default function TradeCTA() {
  return (
    <section id="trade" className="bg-comma-red-dark py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-xl font-medium text-white mb-1.5">
            Are you a retailer or distributor?
          </h2>
          <p className="text-sm text-white/65">
            Partner with Comma Foods and bring quality products to your
            customers.
          </p>
        </div>
        <a
          href="mailto:trade@commafoods.in"
          className="shrink-0 bg-white text-comma-red-dark text-sm font-medium px-7 py-3 rounded-md hover:bg-gray-50 transition-colors"
        >
          Trade enquiry →
        </a>
      </div>
    </section>
  );
}
