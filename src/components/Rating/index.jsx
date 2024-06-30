const Rating = ({ rating }) => {
  const totalStars = 5
  const activeStar = "/src/assets/img/star_active.png"
  const star = "/src/assets/img/star.png"

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? activeStar : star}
          alt={index < rating ? "Filled star" : "Empty star"}
          className="star"
        />
      ))}
    </div>
  )
}

export default Rating
