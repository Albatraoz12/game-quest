import Image from 'next/image';
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsWindows,
  BsFillGiftFill,
} from 'react-icons/bs';

export default function Card() {
  return (
    <div className='border border-transparent'>
      <Image
        src={
          'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg'
        }
        className='rounded-t-lg'
        alt='Cover image of the game'
        width={300}
        height={350}
      />
      <div className=' bg-gray-800 p-3 rounded-b-lg'>
        <div className='flex items-center justify-between px-1 my-1'>
          <div className='flex flex-row gap-1'>
            <BsPlaystation />
            <BsXbox />
            <BsNintendoSwitch />
            <BsApple />
            <BsWindows />
          </div>
          <div
            title='metascore'
            aria-label='metascore'
            className='border-2 rounded-sm border-solid p-1 px-2 mt-1 text-xs font-bold text-green-600 border-green-600'
          >
            42
          </div>
        </div>
        <div>
          <a href='' className='text-2xl'>
            Grand Theft Auto V
          </a>
        </div>
      </div>
    </div>
  );
}
