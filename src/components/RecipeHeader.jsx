/* eslint-disable react/prop-types */
import { AiOutlineFire } from "react-icons/ai";
import { BiCake, BiCheese } from "react-icons/bi";
import { CiWheat } from "react-icons/ci";
import { IoFishOutline } from "react-icons/io5";
import RecipeNutritionalFact from "./RecipeNutritionalFact";

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts?.calories | 0,
      category: "calories",
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      amount: nutritionalFacts?.carbohydrates | 0,
      category: "carbs",
      Icon: CiWheat,
    },
    {
      id: 3,
      amount: nutritionalFacts?.fat | 0,
      category: "fats",
      Icon: BiCheese,
    },
    {
      id: 4,
      amount: nutritionalFacts?.protein | 0,
      category: "proteins",
      Icon: IoFishOutline,
    },
    {
      id: 5,
      amount: nutritionalFacts?.sugar | 0,
      category: "sugar",
      Icon: BiCake,
    },
  ];

  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({ Icon, id, amount, category }) => (
          <RecipeNutritionalFact fact={{ amount, category }} key={id}>
            <Icon />
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  );
}
