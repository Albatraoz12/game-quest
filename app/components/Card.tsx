import Image from 'next/image';

export default function Card() {
  return (
    <section>
      <div>
        <Image
          src={
            'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg'
          }
          alt='Cover image of the game'
          width={300}
          height={350}
        />
        <div className='flex items-center justify-between px-1'>
          LOGOS
          <div
            title='metascore'
            aria-label='metascore'
            className='border-2 rounded-sm border-solid p-1 px-2 mt-1 text-xs font-bold text-green-600 border-green-600'
          >
            42
          </div>
        </div>
        <div>
          <h1>Grand Theft Auto V</h1>
        </div>
      </div>
    </section>
  );
}
