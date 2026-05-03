import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Rice & grains", href: "#products" },
    { label: "Atta & flour", href: "#products" },
    { label: "Spices & masalas", href: "#products" },
    { label: "Snacks", href: "#products" },
    { label: "Beverages", href: "#products" },
  ],
  Company: [
    { label: "About us", href: "#about" },
    { label: "Trade partnerships", href: "#trade" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of use", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Comma Foods logo"
                width={36}
                height={40}
                className="object-contain"
              />
              <div className="leading-none">
                <span className="font-serif text-lg font-medium text-comma-red-dark block">
                  comma
                </span>
                <span className="label-caps text-comma-amber mt-0.5 block">
                  foods
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Pure ingredients, trusted in every Indian kitchen. Quality you can
              taste with every meal.
            </p>
            <p className="label-caps text-comma-amber mt-5">
              Quality you can trust
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-medium text-gray-800 mb-4 uppercase tracking-widest">
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-comma-red transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Comma Foods. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 label-caps">
            Quality you can trust
          </p>
        </div>
      </div>
    </footer>
  );
}
