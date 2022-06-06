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

const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    > ul:nth-of-type(1){
        padding: 70px 0 30px 0;
        display: grid;
        grid-template-columns: repeat(4, 300px);
        margin: 0 auto;
        grid-column-gap: 34px;
        grid-row-gap: 27px;
    }
`