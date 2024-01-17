import { AnimeCard } from "@/components/anime-card";
import { Header } from "@/components/header";
import { SectionTitle } from "@/components/section-title";

export default async function Home() {
  return (
    <main>
      <Header />

      <section className="bg-[#000000da]">
        <ul>
          <SectionTitle
            title="Explore Anime"
            className="text-start text-white/80"
          />
          <AnimeCard />
        </ul>
      </section>
    </main>
  );
}
