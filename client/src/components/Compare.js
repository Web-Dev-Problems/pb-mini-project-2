import React, { useState } from 'react'
import styled from 'styled-components'
import CompareBlock from './CompareBlock'

const Compare = ({ selected, setComparing, houseData}) => {
  const [closeCompare, setCloseCompare] = useState(false)
  
  return (
    <CompareContainer className={`overlay ${closeCompare ? 'close' : '' }`}>
        <section className='compare-window'>
            <section>
                <button className="close-compare" onClick={() => {
                    setCloseCompare(true);
                    setTimeout(()=>{setComparing(false)}, 400)
                }}><p>+</p></button>
            </section>
            <section>
                {selected && selected.map((index, i) => {
                    return <CompareBlock key={i} value={houseData[index]} />
                })}
            </section>
        </section>
    </CompareContainer>
  )
}

const CompareContainer = styled.section`
    @keyframes compare-overlay-in {
        from{
            opacity: 0%;
        }
        to {
            opacity: 100%;
        }
    }
    @keyframes compare-overlay-out {
        from{
            opacity: 100%;
        }
        to {
            opacity: 0%;
        }
    }
    padding: 0!important;
    .compare-window {
        width: max-content;
        height: max-content;
        opacity: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 5px;
        align-items: flex-start;
        >section:nth-of-type(1){
            height: max-content;
            width: 100%;
            max-width: calc(100vw - 7px);
            display: flex;
            justify-content: flex-end;
        }
        > section:nth-of-type(2){
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            max-width: 100vw;
            padding: 20px 50px 30px 50px;
            overflow-x: auto;
            > section ~ section{
                border-left: 1px solid rgba(147, 147, 147, 0.6);
            }
        }    
        .close-compare {
            outline: none;
            border: none;
            background-color: transparent;
            padding: 8px 28px;
            border-radius: 0px 5px 0px 0px;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            > p {
                margin: 0;
                transform: rotate(45deg);
                font-size: 25px;
            }
            :hover {
                background-color: red;
                color: rgb(0 5 21);
            }
        }
    
    }
`

export default Compare