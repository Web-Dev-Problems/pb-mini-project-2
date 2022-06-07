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
        <Filter />
        <section  className={selecting ? "show" : "hide"}>
            <button onClick={() => { !selecting && setSelecting(true) }}>{selecting ? "Deselect All" : "Select" }</button>
            <button className={!(selecting && selected.length >= 2) ? "hidden" : "animate"}>Compare</button>
            <button onClick={() => { setSelecting(false) }}>Cancel</button>
        </section>
        <ul>
            {houseData && Object.values(houseData).map((value, i) => {
                  return <HomeBlock key={i} value={value} index={i} setFavorite={setFavorite} setHouseData={setHouseData} selecting={selecting} setSelected={setSelected} />
            })}
          </ul>
          {/* <button className={`compare-button ${(selecting && selected.length >= 2) ? "visible" : "hidden"}`}>Compare</button> */}
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    > section{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 0 50px;
        padding: 50px 0 0 0;
        overflow: hidden;
        button{
            font-size: 18px;
            min-width: 50px;
            transition: transform 0.7s ease-in-out;
            border-radius: 8px;
            padding: 4px 16px;
            border: 3px solid;
        }
        button:nth-child(1){
            border-color: #939393;
            :hover{
                background-color: #939393;
                color: #fff;
            }
        }
        button:nth-child(2){
            border-color:  #939393;
            margin-left: 8px;
            :hover{
                background-color:  #939393;
                color: #fff;
            }
        }
        button:nth-child(2).hidden{
            opacity: 50%;
            cursor: default;
            :hover{
                background-color: transparent;
                color: revert;
            }
        }
        @keyframes bounce {
            25%{
                transform: translateY(-10px);
            }
            50%{
                transform: translateY(0);
            }
            75%{
                transform: translateY(-5px)
            }
            100%{
                transform: translateY(0);
            }
        }
        button:nth-child(2).animate{
            animation: bounce 0.7s cubic-bezier(1, 1, 0.45, 0.71);
            border-color:  blue;
            :hover{
                background-color: blue;
            }
        }
        button:nth-child(3){
            margin-left: 8px;
            border-color: #ff6464;
            :hover{
                background-color: #ff6464;
                color: #fff;
            }
        }
    }
    .hide{
        button:nth-child(1){
            transform: translateX(calc(84px + 13ch));
        }
        button:nth-child(2){
            transform: translateX(250px);
        }
        button:nth-child(3){
            transform: translateX(250px);
        }
    }
    > ul:nth-of-type(2){
        padding: 20px 0 30px 0;
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