import styled from "styled-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
