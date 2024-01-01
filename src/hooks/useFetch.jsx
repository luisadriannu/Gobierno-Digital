import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();

        if (url.includes("/pokemon/")) {
          const speciesResponse = await fetch(jsonData.species.url);
          const speciesData = await speciesResponse.json();

          const pokemonDataWithSpecies = {
            ...jsonData,
            species: speciesData,
          };

          setData(pokemonDataWithSpecies);
        } else {
          const detailedPokemons = await Promise.all(
            jsonData.results.map(async (pokemon) => {
              const res = await fetch(pokemon.url);
              return await res.json();
            })
          );
          setData(detailedPokemons);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};
