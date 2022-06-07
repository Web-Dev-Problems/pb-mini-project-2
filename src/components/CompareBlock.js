import React, { useRef } from 'react'
import styled from 'styled-components'
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const CompareBlock = ({ value }) => {
    var position = useRef(1200)
    const carouselRef = useRef()
    var schema = ["Address", "Price", "Apartment Type", "Year", "Plot Area", "Beds", "Baths"]
  return (
    <CompareBlockContainer schema={schema}>
        <section id="carousel">
          <ul ref={carouselRef}>
            {value.images.map((img) => {
              return <li><img src={img} alt="House"></img></li>
            })}
          </ul>
        </section>
      <section className='nav-arrows'>
        <ArrowBackIosIcon onClick={() => {
          position.current = (position.current - 300) % 1200;
          carouselRef.current && (carouselRef.current.style.left = `-${position.current}px`)}
            }/>
        <ArrowForwardIosIcon onClick={() => {
          position.current = (position.current + 300) % 1200;
          carouselRef.current && (carouselRef.current.style.left = `-${position.current}px`)}
            }/>
      </section>
      <section className='compare-details'>
        {Object.keys(value).map((attr, i) => {
            if (attr !== "images" && attr !== "favorite") {
                return <p id={`${attr}`}>{value[attr]}</p>
            }
        })}
      </section>
    </CompareBlockContainer>
  )
}

const CompareBlockContainer = styled.section`
    position : relative;
    border: none;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 330px;
    > svg{
      width: 30px;
      height: 30px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 8px;
      cursor: pointer;
      transition: color 0.1s;
      :hover{
        color: rgb(255 225 225);
      }
    }
    .appear{
      color: #fff;
      z-index: 3;
      :hover{
        z-index:3;
      }
    }
    .disappear{
      color: transparent;
      z-index: 0;
      :hover{
        z-index: 0;
      }
    }
    #carousel{
      margin: 15px; 
      width: 300px;
      overflow: hidden;
      position: relative;
      height: 200px;
      ul {
        display: flex;
        flex-direction: row;
        position: absolute;
        transition: all 0.5s;
        left: 0;
        li{
          height: 200px;
          img{
            object-fit: cover;
            height: 200px;
            width: 300px;
            border-radius: 4px 4px 0 0;
          }
        }
      }
    }
    .nav-arrows {
      position: absolute;
      top: 88px;
      width: 100%;
      svg {
        position: absolute;
        color: rgba(255, 255, 255, 0.6);
        width: 25px;
        height: 25px;
        cursor: pointer;
        :hover{
          color: rgba(255, 255, 255);
        }
      }
      svg:nth-of-type(1) {
        left: 0;
        margin-left: calc(15px + 0.7ch);
      }
      svg:nth-of-type(2) {
        right: 0;
        margin-right: calc(15px + 0.7ch);
      }
    }
    .compare-details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            /* border-bottom: 1px solid #939393; */
            font-size: 18px;
            font-weight: 700;
            padding: 0 0 0 8px;
            margin-top: 16px;
            height: 40px;
            display: flex;
            flex-direction: column;
            letter-spacing : 3px;
            padding-left: 15px;
            ::before{
              text-transform: uppercase;
              font-size: 13px;
              font-weight: 500;
              color: #939393;
              /* padding: 8px 0 0 0; */
            }
        }
        p[id="address"]{
          margin-bottom: 16px;
        }
        p:nth-of-type(1)::before{
          content : "${props => props.schema[0]}"
        }
        p:nth-of-type(2)::before{
          content : "${props => props.schema[1]}"
        }
        p:nth-of-type(3)::before{
          content : "${props => props.schema[2]}"
        }
        p:nth-of-type(4)::before{
          content : "${props => props.schema[3]}"
        }
        p:nth-of-type(5)::before{
          content : "${props => props.schema[4]}"
        }
        p:nth-of-type(6)::before{
          content : "${props => props.schema[5]}"
        }
        p:nth-of-type(7)::before{
          content : "${props => props.schema[6]}"
        }
    }
`

export default CompareBlock
