import Banner from "../../components/Banner"
import CardsList from "../../components/CardList"

function Home({ datas }) {
  return (
    <div className="home">
      <Banner home />
      <CardsList datas={datas} />
    </div>
  )
}

export default Home
