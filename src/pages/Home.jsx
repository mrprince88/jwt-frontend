import styled from "styled-components";
import React, { useState } from "react";
import GenerateToken from "../components/GenerateToken";
import VerifyToken from "../components/VerifyToken";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e2e2e2;
  background-size: cover;
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 380px;
  background-color: white;
`;

const Button = styled.button`
  width: 50%;
  padding: 15px;
  background: white;
  font-size: 18px;
  border: 0;
`;
const Navigation = styled.div``;

function Home() {
  const [menu, setMenu] = useState(1);
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Button
            onClick={() => setMenu(1)}
            style={{ background: menu === 1 ? "white" : "#C0C0C0" }}
          >
            Generate Token
          </Button>
          <Button
            onClick={() => setMenu(2)}
            style={{ background: menu === 2 ? "white" : "#C0C0C0" }}
          >
            Verify Token
          </Button>
        </Navigation>
        {menu === 1 ? <GenerateToken /> : <VerifyToken />}
      </Wrapper>
    </Container>
  );
}

export default Home;
