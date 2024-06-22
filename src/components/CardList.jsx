/* eslint-disable react/prop-types */
import Card from "./Card";

export default function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </section>
  );
}
