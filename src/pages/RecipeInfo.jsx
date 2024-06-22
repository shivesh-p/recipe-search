/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

export default function RecipeInfo({ ingredients, instructions, image }) {
  return (
    <div className="recipe-info">
      <Outlet context={{ instructions, ingredients }} />
      <img src={image} alt="" className="recipe-img" />
    </div>
  );
}
