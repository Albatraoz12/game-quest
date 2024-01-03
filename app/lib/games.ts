export const fetchGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data;
};
