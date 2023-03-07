import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Nav>
        <ContentNav>
          <Header />
        </ContentNav>
        <Form />
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
