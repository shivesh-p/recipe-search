/* eslint-disable react/prop-types */
export default function RecipeNutritionalFact({ fact, children }) {
  return (
    <div className="recipe-fact-container">
      {children}
      <h3>{fact.amount}</h3>
      <p>{fact.category}</p>
    </div>
  );
}
