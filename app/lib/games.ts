export const fetchGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=2`
  );
  const data = await response.json();
  return data;
};
