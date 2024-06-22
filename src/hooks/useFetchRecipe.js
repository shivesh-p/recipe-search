/* eslint-disable no-unused-vars */
import axios from "axios";
import { useReducer } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: {},
  headers: {
    "x-rapidapi-key": "69a96b4fe9mshb4af1456212e69ap1f21cajsnf7e1a1bf092e",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const intialstate = {
  recipe: null,
  loading: false,
  error: null,
};

const Actions = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (_, action) => {
  switch (action.type) {
    case Actions.FETCHING_DATA: {
      return {
        recipe: null,
        error: null,
        loading: true,
      };
    }
    case Actions.FETCH_SUCCESS: {
      return {
        recipe: action.payload,
        error: null,
        loading: false,
      };
    }
    case Actions.FETCH_ERROR: {
      return {
        recipe: null,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return intialstate;
  }
};

const useFetchRecipe = () => {
  // const [recipe, setRecipe] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [{ recipe, loading, error }, dispatch] = useReducer(
    reducer,
    intialstate
  );

  async function fetchRecipe(id) {
    // setLoading(true);
    // setRecipe(null);
    // setError(null);
    dispatch({ type: Actions.FETCHING_DATA });
    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(options);
      // setRecipe(response.data);
      // setLoading(false);
      dispatch({ type: Actions.FETCH_SUCCESS, payload: response.data });

      return response;
    } catch (error) {
      // setError(error.message);
      // console.log(error);
      // setLoading(false);
      dispatch({ type: Actions.FETCH_ERROR, payload: error.message });
    }
  }

  return [fetchRecipe, { recipe, loading, error }];
};

export default useFetchRecipe;
