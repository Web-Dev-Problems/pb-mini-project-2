import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CompareBlock from './CompareBlock'

const Compare = ({ selected, setComparing, houseData}) => {
  const [closeCompare, setCloseCompare] = useState(false)
  var schema = ["Price", "Apartment Type", "Year", "Plot Area", "Beds", "Baths", "Address"]
  
  return (
    <CompareContainer className={`overlay ${closeCompare ? 'close' : '' }`}>
        <section className='compare-window'>
            <section className='schema'>
                {schema.map((attr) => {
                    return <p>{attr}</p>
                })}
            </section>
            {selected && selected.map((index, i) => {
                return <CompareBlock key={i} value={houseData[index]} />
            })}
            <button className="close-compare" onClick={() => {
                setCloseCompare(true);
                setTimeout(()=>{setComparing(false)}, 400)
            }}><p>+</p></button>
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
    .compare-window {
        width: max-content;
        height: max-content;
        opacity: 100%;
        background-color: white;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        padding: 50px 50px 30px 50px;
        border-radius: 5px;
        overflow-x: scroll;
        .schema {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            p {
                border-right: 1px solid #939393;
                width: 100%;
                text-align: center;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 500;
                color: #939393;
                width: 100%;
                height: 40px;
                width: 100%;
                border-bottom: 1px solid #939393;
                width: 100%;
                /* border-bottom: 1px solid transparent; */
                padding: 8px;
            }
        }
        .close-compare {
            position: absolute;
            top: 0px;
            right: 0px;
            outline: none;
            border: none;
            background-color: transparent;
            padding: 6px 28px;
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