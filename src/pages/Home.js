import HomeBlock from '../components/HomeBlock';
import styled from "styled-components";
// import Filter from "../components/Filter";
import { useState } from 'react';
import Compare from '../components/Compare';


function Home({ houseData, setFavorite, setHouseData }) {
    const [selecting, setSelecting] = useState(false)
    const [reset, setReset] = useState(false)
    const [selected, setSelected] = useState([])
    const [comparing, setComparing] = useState(false)
    const resetCompare = () => {
        setSelected([]);
        setReset(!reset)
    }
  return (
    <HomeContainer>
        {/* <Filter /> */}
        <section  className={selecting ? "show" : "hide"}>
            <button className={(selecting && selected.length === 0) && "hidden"} onClick={() => { (selecting && selected.length > 0)  ? resetCompare() : setSelecting(true) }}>{selecting ? "Deselect All" : "Select" }</button>
            <button className={!(selecting && selected.length >= 2) ? "hidden" : "animate"}
            onClick={() => (selecting && selected.length >= 2) && setComparing(true)}>Compare</button>
            <button onClick={() => { setSelected([]); setSelecting(false) }}>Cancel</button>
        </section>
        <ul>
            {houseData && Object.values(houseData).map((value, i) => {
                  return <HomeBlock key={i} value={value} index={i} setFavorite={setFavorite} setHouseData={setHouseData} selecting={selecting} setSelected={setSelected} reset={reset} />
            })}
          </ul>
          {/* <button className={`compare-button ${(selecting && selected.length >= 2) ? "visible" : "hidden"}`}>Compare</button> */}
          {comparing && <Compare selected={selected} setComparing={setComparing} houseData={houseData} />}
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
        padding: 20px 0 0 0;
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
            transition: transform 0.7s ease-in-out, border-color 0.1s ease-in, color 0.1s ease-in, opacity 0.1s ease-in;
            :hover{
                background-color: #939393;
                color: #fff;
            }
        }
        button:nth-child(1).hidden{
            opacity: 50%;
            cursor: default;
            :hover{
                background-color: transparent;
                color: revert;
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
            transition: transform 0.7s ease-in-out, border-color 0.1s ease-in, color 0.1s ease-in, opacity 0.1s ease-in;
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
            border-color:  #3160f0;
            :hover{
                background-color: #3160f0;
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
    > ul:nth-of-type(1){
        padding: 20px 0 30px 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        width: 100%;
        justify-content: center;
        grid-column-gap: 50px;
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
        letter-spacing: 1em;
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
    .overlay {
        background-color: rgba(5, 10, 20, 0.3);
        position: fixed;
        top: 0;
        z-index: 4;
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: compare-overlay-in 0.4s ease-in-out 0s 1 backwards;
    }

    .close{
        animation: compare-overlay-out 0.4s ease-in-out 0s 1 forwards;
    }
`