import React from 'react'
import styled from "styled-components"
// import Filter from '../components/Filter'
import HomeBlock from '../components/HomeBlock';

function Favorite({houseData, favorite, setFavorite, setHouseData}) {
  return (
    <FavoriteContainer>
        {/* <Filter /> */}
        <ul>
            {favorite && favorite.map((value) => {
                return <HomeBlock value={houseData[value]} index={value} setFavorite={setFavorite} setHouseData={setHouseData} />
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
        display: grid;
        grid-template-columns: repeat(4, 300px);
        margin: 0 auto;
        grid-column-gap: 34px;
        grid-row-gap: 27px;
    }
`