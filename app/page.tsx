import { fetchGames } from './lib/games';

export default async function Home() {
  // const games = await fetchGames();
  // console.log(games);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Game Quest</h1>
    </main>
  );
}
