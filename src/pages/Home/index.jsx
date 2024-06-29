import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Banner"
import CardsList from "../../components/CardList"

function Home() {
  const { datas } = useLoaderData()

  return (
    <div>
      <Banner />
      <CardsList datas={datas} />
    </div>
  )
}

export default Home
