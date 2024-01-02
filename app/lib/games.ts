export const fetchGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=1`
  );
  const data = await response.json();
  return data;
};

const mapPlatformsToIcons = (platforms: string[]): string[] => {
  const platformIconMap: Record<string, string> = {
    PC: 'BsWindows',
    PlayStation: 'BsPlaystation',
    Xbox: 'BsXbox',
    'Apple Macintosh': 'BsApple',
    Nintendo: 'BsNintendoSwitch',
  };

  const icons: string[] = platforms.map((platform: string) => {
    const PlatformIcon: string | undefined = platformIconMap[platform];
    return PlatformIcon || ''; // Handle unknown platforms by returning an empty string
  });

  return icons.filter((icon: string) => icon !== ''); // Remove empty strings (unknown platforms)
};
