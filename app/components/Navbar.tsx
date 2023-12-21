import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav>
      <div className='flex justify-between py-3 px-6 border-b items-center'>
        <h1 className='w-auto'>Game Quest</h1>
        <form action='' className='w-full max-w-md'>
          <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
            <MagnifyingGlassIcon className='w-5 h-5 absolute ml-3 pointer-events-none' />
            <input
              type='text'
              name='search'
              placeholder='Search Games'
              autoComplete='off'
              aria-label='search games'
              className='w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
            />
          </div>
        </form>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
