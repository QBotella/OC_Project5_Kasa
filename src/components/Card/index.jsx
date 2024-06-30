function Card({ card }) {
  const backgroundImage = {
    backgroundImage: `url(${card.cover})`,
  };

  return (
    <article className="card" style={backgroundImage}>
      <h1>{card.title}</h1>
    </article>
  );
}

export default Card;
