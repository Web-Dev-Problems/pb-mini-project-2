import styled from "styled-components";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite"
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [houseData, setHouseData] = useState((JSON.parse(localStorage.getItem("data")) || {}))
  const [favorite, setFavorite] = useState((JSON.parse(localStorage.getItem("favorite")) || []))
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite))    
    localStorage.setItem("data", JSON.stringify(houseData))
  }, [favorite, houseData])
  useEffect(() => {
    if (!localStorage.getItem("data") || Object.keys(JSON.parse(localStorage.getItem("data"))).length === 0) {
      localStorage.setItem("data", JSON.stringify({
      0 :{
        img : "/houseImage.jpg",
        img1 : "/houseImage2.jpg",
        img2 : "/houseImage3.jpg",
        img3 : "/houseImage4.jpg",
        price : 15000,
        type : "Apartment",
        year : 2005,
        area: 1406,
        beds : 4,
        baths : 2,
        address: "1159 Quince Ave, Sunnyvale, CA 94087",
        favorite: false
      },
      1 :{
        img : "/houseImage.jpg",
        img1 : "/houseImage2.jpg",
        img2 : "/houseImage3.jpg",
        img3 : "/houseImage4.jpg",
        price : 30000,
        type : "Commercial",
        year : 2010,
        area: 1406,
        beds : 7,
        baths : 4,
        address: "1159 Quince Ave, Sunnyvale, CA 94087",
        favorite: false
      },
      2 :{
        img : "/houseImage.jpg",
        img1 : "/houseImage2.jpg",
        img2 : "/houseImage3.jpg",
        img3 : "/houseImage4.jpg",
        price : 5000,
        type : "Condo",
        year : 2002,
        area: 1406,
        beds : 5,
        baths : 6,
        address: "1159 Quince Ave, Sunnyvale, CA 94087",
        favorite: false
      },
      3 :{
        img : "/houseImage.jpg",
        img1 : "/houseImage2.jpg",
        img2 : "/houseImage3.jpg",
        img3 : "/houseImage4.jpg",
        price : 25000,
        type : "Townhouse",
        year : 2020,
        beds : 5,
        area: 1406,
        baths : 3,
        address: "1159 Quince Ave, Sunnyvale, CA 94087",
        favorite: false
      },
      4 :{
        img : "/houseImage.jpg",
        img1 : "/houseImage2.jpg",
        img2 : "/houseImage3.jpg",
        img3 : "/houseImage4.jpg",
        price : 5000,
        type : "Co-op",
        year : 2000,
        area: 1406,
        beds : 4,
        baths : 2,
        address: "1159 Quince Ave, Sunnyvale, CA 94087",
        favorite: false
      }}))}
      setHouseData(JSON.parse(localStorage.getItem("data")))
  }, [])
  
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home houseData = {houseData} setFavorite={setFavorite} setHouseData={setHouseData} />} />
          <Route exact path="/favorite" element={<Favorite houseData = {houseData} favorite={favorite} setFavorite={setFavorite} setHouseData={setHouseData} />} />
          {/* Page for each product like https://www.tesla.com/model3 */}
          {/* Before they compare we should ask for their optimal zip code or address so we could show how near a home is to there */}
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
`
