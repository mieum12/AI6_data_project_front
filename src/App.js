import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import RoutesList from "./routes/RoutesList";
import { Footer } from "./components/Footer";
// import { SERVER_BASE_URL } from "./config/constants";

function App() {
  // CORS 확인용 임시 코드
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:8000/shelter`);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav>
        <ContentNav>
          <RoutesList />
        </ContentNav>
        <Footer />
      </Nav>
    </>
  );
}

//footer 하단 고정
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentNav = styled.div`
  flex: 1;
`;

export default App;
