import { Navigate, useParams } from "react-router-dom"
import Slider from "../../components/Slider/index"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"

const HousingDetail = ({ datas }) => {
  const { id } = useParams()
  const housing = datas.find((item) => item.id === id)

  if (!housing) {
    return <Navigate to="*" />
  }

  const [firstName, lastName] = housing.host.name.split(" ")

  return (
    <div className="housingDetail">
      <Slider pictures={housing.pictures} title={housing.title} />
      <div className="housingDetail__info">
        <div className="housingDetail__nameLocation">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
        </div>
        <div className="housingDetail__host">
          <p>
            {firstName}
            <br /> {lastName}
          </p>
          <img src={housing.host.picture} alt={housing.host.name}></img>
        </div>
        <div className="housingDetail__tags">
          {housing.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="housingDetail__rating">
          <Rating rating={housing.rating} />
        </div>
        <div className="housingDetail__collapse">
          <Collapse title="Description">{housing.description}</Collapse>
          <Collapse title="Équipements">
            <ul>
              {housing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default HousingDetail
