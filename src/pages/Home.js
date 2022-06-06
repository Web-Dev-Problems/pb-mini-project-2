// import Filter from '../components/Filter'
import HomeBlock from '../components/HomeBlock';
import styled from "styled-components"


function Home({ houseData, setFavorite, setHouseData }) {
  return (
    <HomeContainer>
        {/* <Filter /> */}
        <ul>
            {houseData && Object.values(houseData).map((value, i) => {
                return <HomeBlock key={i} value={value} index={i} setFavorite={setFavorite} setHouseData={setHouseData} />
            })}
        </ul>
    </HomeContainer>
  )
}

export default Home
