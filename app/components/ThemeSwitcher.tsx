'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label htmlFor='toggle' className='flex items-center cursor-pointer'>
      <div className='relative flex items-center'>
        <input
          id='toggle'
          type='checkbox'
          className='hidden'
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <div className='toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner transition-all duration-300'></div>
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0
          ${theme === 'dark' ? 'right-0' : 'left-0'}
          transition-all duration-300`}
        ></div>
      </div>
      <div className='ml-3 text-gray-700 dark:text-gray-300 font-medium'>
        {theme === 'light' ? 'Dark' : 'Light'}
      </div>
    </label>
  );
};
