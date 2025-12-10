import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* header */}
      <Header />
      {/* main  */}
      <main>
        <Hero />
      </main>

    </div>
  );
}
