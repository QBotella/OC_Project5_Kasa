import { Link } from "react-router-dom";
import Card from "../Card";

function CardsList({ datas }) {
  if (!Array.isArray(datas)) {
    return <p>Loading...</p>;
  }

  return (
    <section className="cards__list">
      {datas.map((card) => (
        <Link key={card.id} to={`/${card.id}`}>
          <Card card={card} />
        </Link>
      ))}
    </section>
  );
}

export default CardsList;