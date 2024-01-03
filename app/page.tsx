import Card from './components/Card';
import { fetchGames } from './lib/games';

export default async function Home() {
  const games = await fetchGames();

  return (
    <main className='p-4 my-10'>
      <section className='mb-10'>
        <h1 className='text-6xl'>New and trending</h1>
        <p className='text-lg'>Based on player counts and release date</p>
      </section>

      <section className='flex flex-row items-center justify-center md:justify-start gap-4 flex-wrap'>
        {games.results.map((game: any) => (
          <Card games={game} key={game.id} />
        ))}
      </section>
    </main>
  );
}
