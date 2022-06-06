import styled from "styled-components";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite"
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
