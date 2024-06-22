import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "x-rapidapi-key": "69a96b4fe9mshb4af1456212e69ap1f21cajsnf7e1a1bf092e",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};
const useFetchRecipes = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRecipes(searchTerm) {
    setLoading(true);
    setRecipe(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }
      const response = await axios.request(options);
      setRecipe(response.data.results);
      setLoading(false);
      return response;
    } catch (error) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  }

  return [fetchRecipes, { recipe, loading, error }];
};

export default useFetchRecipes;
