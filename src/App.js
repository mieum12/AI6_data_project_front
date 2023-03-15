import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import RoutesList from "./routes/RoutesList";
import { Footer } from "./components/Footer";

function App() {
  // CORS 확인용 임시 코드
  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get("/shelter");
      console.log(data);
    }
    fetchdata();
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
