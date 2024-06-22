/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import RecipeInfo from "./RecipeInfo";
export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { recipe, loading, error }] = useFetchRecipe();
  useEffect(() => {
    fetchRecipe(id);
  }, []);
  console.log(recipe);
  if (loading) return <Loading></Loading>;
  if (error) return <Error message="Oh No!" explanation={error} />;
  if (recipe?.errors)
    return <Error message="Oh No!" explanation="Some kind of error occured!" />;
  return (
    <div>
      {recipe && (
        <>
          <RecipeHeader
            name={recipe.name}
            nutritionalFacts={recipe.nutrition}
          ></RecipeHeader>
          <RecipeInfo
            instructions={recipe.instructions}
            ingredients={recipe.sections[0].components}
            image={recipe.thumbnail_url}
          ></RecipeInfo>
        </>
      )}
    </div>
  );
}
