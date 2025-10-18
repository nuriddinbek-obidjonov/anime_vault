import LoadMore from "../components/LoadMore";
import { findAnime } from "./action";

async function Home() {
  const data = await findAnime(1);

  return (
    <main className="flex flex-col gap-10 sm:p-16 px-8 py-16">
      <h2 className="font-bold text-white text-3xl">Explore Anime</h2>

      <section className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
