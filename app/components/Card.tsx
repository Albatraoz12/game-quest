import Image from 'next/image';
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsWindows,
  BsFillGiftFill,
} from 'react-icons/bs';

export default function Card({ games }: any) {
  const platformIconMap: any = {
    PC: BsWindows,
    PlayStation: BsPlaystation,
    Xbox: BsXbox,
    'Apple Macintosh': BsApple,
    Nintendo: BsNintendoSwitch,
  };
  return (
    <div className='border border-transparent transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
      <figure>
        <Image
          src={`${games.background_image}`}
          className='rounded-t-lg h-auto w-auto'
          alt='Cover image of the game'
          priority
          width={300}
          height={350}
        />
      </figure>
      <div className=' bg-gray-800 p-3 rounded-b-lg'>
        <div className='flex items-center justify-between px-1 my-1'>
          <div className='flex flex-row gap-1'>
            {games.parent_platforms.map((icon: any, index: number) => {
              const platformName = icon.platform.name;
              const IconComponent = platformIconMap[platformName];

              if (IconComponent) {
                return <IconComponent key={index} />;
              }

              return null;
            })}
          </div>
          <div
            title='metascore'
            aria-label='metascore'
            className='border-2 rounded-sm border-solid p-1 px-2 mt-1 text-xs font-bold text-green-600 border-green-600'
          >
            {games.metacritic}
          </div>
        </div>
        <div>
          <a href='' className='text-2xl'>
            {games.name}
          </a>
        </div>
      </div>
    </div>
  );
}
