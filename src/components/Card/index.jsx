import PropTypes from "prop-types"

function Card({ card }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${card.cover})`,
  }

  return (
    <article className="card" style={backgroundImageStyle}>
      <h1>{card.title}</h1>
    </article>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
