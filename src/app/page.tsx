import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* header */}
      <Header />
      {/* main  */}
      <main>
        <Hero />
        <FAQ />
        <Footer />
      </main>

    </div>
  );
}
