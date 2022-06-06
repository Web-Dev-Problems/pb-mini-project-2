// import Filter from '../components/Filter'
import HomeBlock from '../components/HomeBlock';
import styled from "styled-components";
import Filter from "../components/Filter";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState } from 'react';


function Home({ houseData, setFavorite, setHouseData }) {
    const [selecting, setSelecting] = useState(false)
    const [selected, setSelected] = useState([])
  return (
    <HomeContainer>
          <section className="options">
              <Filter />
              <section onClick={() => { setSelecting(true) }} className={selecting ? "big" : "small"}>Select...{selecting && <CancelOutlinedIcon onMouseDown={() => { setSelecting(false) }} />} </section>
          </section>
        <ul>
            {houseData && Object.values(houseData).map((value, i) => {
                  return <HomeBlock key={i} value={value} index={i} setFavorite={setFavorite} setHouseData={setHouseData} selecting={selecting} setSelected={setSelected} />
            })}
        </ul>
          <button className={`compare-button ${(selecting && selected.length >= 2) ? "visible" : "hidden"}`}>Compare</button>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    .options {
        padding: 0px 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        section {
            display: flex;
            cursor: pointer;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            background-color: #939393;
            height: 30px;
            padding: 20px 5px;
            border-radius: 4px;
            // margin: 0 4px 4px 4px;
            transition: 0.1s ease-in-out;
            svg {
                color: red;
                width: 20px;
                height: 20px;
            }
        }
        .small {
            width: 80px;
        }
        .big {
            width: 120px;
        }
    }   
    > ul:nth-of-type(1){
        padding: 70px 0 30px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        width: 100%;
        justify-content: center;
        grid-column-gap: 34px;
        grid-row-gap: 27px;
    }
    .compare-button {
        padding: 20px 40px;
        margin: 0 auto;
        position: fixed;
        left: 50%;
        color:rgba(0, 0, 0, 0.6);
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        line-spacing: 1em;
        transition: ease-in-out 0.2s;
        border-radius: 7px;
        background-color: rgb(32 76 234);
        opacity: 90%;
        box-shadow: 1px 2px 8px 2px rgb(32 76 234 / 80%);
        color: white;
    }
    .visible {
        top: 90%;
    }
    .hidden {
        top: 100%;
    }   
`