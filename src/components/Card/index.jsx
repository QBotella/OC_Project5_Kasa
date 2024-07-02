function Card({ card }) {
  const backgroundImage = {
    backgroundImage: `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(10, 10, 10, 0) 42%,
    rgba(4, 4, 4, 0.205) 99.99%,
    rgba(0, 0, 0, 0.5) 100%
  ), url(${card.cover})`,
  }

  return (
    <article className="card" style={backgroundImage}>
      <h1>{card.title}</h1>
    </article>
  )
}

export default Card
