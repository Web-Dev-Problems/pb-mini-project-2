import {useState, useRef } from 'react'
import styled from "styled-components"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function HomeBlock({ value, index, setFavorite, setHouseData }) {
  const [favoritebool, setFavoritebool] = useState(value.favorite)
  var position = useRef(1200)
  const carouselRef = useRef()
  function FormatPrice(num){
    if(num >= 1000000){
      return Math.floor(num/1000000) + "M"
    }
    else if(num >= 1000){
      return Math.floor(num/1000) + "K"
    }
    return num
  } 
  return (
    <HomeBlockContainer type={value.type} area={value.area} beds={value.beds} baths={value.baths}>
      <FavoriteIcon className={ favoritebool ?"appear": "disappear"} onMouseDown={(event) => {
        setHouseData((prevData) => {
          prevData[index].favorite = false
          return prevData
        })
        setFavorite((favorite) => {
          return favorite.filter(e => e !== index)
        });
        setFavoritebool(!favoritebool)
        }}/>
      <FavoriteBorderIcon className={ favoritebool ? "disappear": "appear"} onMouseDown={
        (event) => {
          setHouseData((prevData) => {
            prevData[index].favorite = true
            return prevData
          })
          setFavorite((favorite) => {
            return [...favorite, index]
          });
          setFavoritebool(!favoritebool)
        }}/>
        <section id="carousel">
          <ul ref={carouselRef}>
            <li><img src={value.img} alt="House"></img></li>
            <li><img src={value.img1} alt="House"></img></li>
            <li><img src={value.img2} alt="House"></img></li>
            <li><img src={value.img3} alt="House"></img></li>
          </ul>
        </section>
      <section className='nav-arrows'>
        <ArrowBackIosIcon onClick={() => {
          position.current = (position.current - 300) % 1200;
          {carouselRef.current && (carouselRef.current.style.left = `-${position.current}px`)}}
            }/>
        <ArrowForwardIosIcon onClick={() => {
          position.current = (position.current + 300) % 1200;
          {carouselRef.current && (carouselRef.current.style.left = `-${position.current}px`)}}
            }/>
      </section>
      <p id="price">${FormatPrice(value.price)}</p>
      <section>
        <h3 id="address">{value.address}</h3>
        <p id="type" type={value.type}>Apartment Type :</p>
        <p id="area">Plot Area :</p>
        <section className="facilities">
          <section>
            <HotelIcon />
          </section>
          <section>
            <BathtubIcon />
          </section>
        </section>
      </section>
    </HomeBlockContainer>
  )
}

const HomeBlockContainer = styled.li`
    position : relative;
    border: none;
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.25);
    > svg{
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
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
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
        margin-left: 1ch;
      }
      svg:nth-of-type(2) {
        right: 0;
        margin-right: 1ch;
      }
    }
    #price{
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0.03em;
      position: absolute;
      color: #3E3F57;
      right: 5px;
      top: 164px;
      background-color: rgba(217, 217, 217, 0.35);
      border-radius: 4px;
      padding: 4px;
    }
    > section:nth-of-type(3) {
      display: flex;
      flex-direction: column;
      padding: 0 12px;
      #address {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: #676767;
        padding: 8px 0 4px 0;
        text-transform: capitalize;
      }
      #type:after{
        content: "${props => props.type}";
      }
      #area:after{
        content: "${props => props.area}";
      }
      #type, #area {
        padding: 6px 0px;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #939393;
        :after {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #676767;
          padding-left: 0.7ch;
          text-transform: capitalize;
        }
        /* span {
          // font-family: 'Asap';
          font-weight: 600;
          font-size: 12px;
          line-height: 14px;
          color: #676767;
          align-self: start;
        } */
      }
      .facilities {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 10px 0px;
        section{
          display: flex;
          flex-direction: row;
          align-items: center;
          svg {
            width: 20px;
            height: 20px;
            color: #939393;
          }
          :after {
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            color: #676767;
            padding: 0 0 0 0.7ch;;
          }
        }
        section:nth-of-type(1):after{
          content: "${props => props.beds}";
        }
        section:nth-of-type(2):after{
          content: "${props => props.baths}";
        }
      }
    }
  `

export default HomeBlock
