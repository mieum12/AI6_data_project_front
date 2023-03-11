import "./App.css";
import styled from "styled-components";
import RoutesList from "./routes/RoutesList";
import Footer from "./components/Footer";
console.log("20230311 김민성 - 지우셔도 됩니다. ");
function App() {
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
