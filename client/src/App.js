import styled from "styled-components";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite"
import ListHouse from "./pages/ListHouse";
import Navbar from "./components/Navbar";
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [houseData, setHouseData] = useState({})
  const [favorite, setFavorite] = useState({})

  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home houseData = {houseData} setFavorite={setFavorite} setHouseData={setHouseData} favorite={favorite} />} />
          <Route exact path="/favorite" element={<Favorite houseData = {houseData} favorite={favorite} setFavorite={setFavorite} setHouseData={setHouseData} />} />
          <Route exact path="/listing" element={<ListHouse />} />
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
