import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPillars from "@/components/BrandPillars";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import TradeCTA from "@/components/TradeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandPillars />
      <ProductCategories />
      <FeaturedProducts />
      <AboutSection />
      <TradeCTA />
      <Footer />
    </main>
  );
}
