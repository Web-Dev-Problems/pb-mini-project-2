import React from 'react'
import styled from "styled-components"
// import Filter from '../components/Filter'
import HomeBlock from '../components/HomeBlock';

function Favorite({houseData, favorite, setFavorite, setHouseData}) {
  return (
    <FavoriteContainer>
        {/* <Filter /> */}
        <ul>
            {favorite && favorite.map((value, i) => {
                return <HomeBlock key={i} value={houseData[value]} index={value} setFavorite={setFavorite} setHouseData={setHouseData} />
            })}
        </ul>
    </FavoriteContainer>
  )
}

export default Favorite

const FavoriteContainer = styled.section`
    display: flex;
    flex-direction: column;
    > ul:nth-of-type(1){
        padding: 70px 0 30px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        width: 100%;
        justify-content: center;
        grid-column-gap: 34px;
        grid-row-gap: 27px;
    }
`