import { HomeContainer, HomeContent } from './HomeElements'
import { Map, Sidebar, Cases } from '../../components'

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <HomeContent>
        <Map />
        <Cases />
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
