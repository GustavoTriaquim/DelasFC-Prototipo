import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Delas-Logo.png";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
    padding: 16vh 5.8vw 3.8vh 5.8vw;
  }
`;

const Interface = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 150px 10% 100px 10%;

  @media (max-width: 1000px) {
    gap: 30px;
    padding: 0;
  }
`;

const ImgText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Img = styled.img`
  width: 200px;

  @media (max-width: 1000px) {
    width: 55vw;
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Text = styled.div`
  font-size: 23px;
  color: #fff;
  font-weight: bold;
  cursor: default;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
`;

const ButtonDiv = styled.div`
@media (max-width: 1000px) {
  width: 100%;
  display: flex;
  justify-content: center;
}
`;

const Button = styled.button`
  width: 220px;
  padding: 10%;
  background-color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 23px;
  font-weight: bold;
  color: #523f85;

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    background-color: #523f85;
    color: #fff;
    border: 1px solid #fff;
  }

  @media (max-width: 1000px) {
    width: 80%;
    height: 7vh;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function StartPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <Interface>
        <ImgText>
          <div>
            <Img src={Logo} alt="DELASFC" />
          </div>
          <Texts>
            <Text>SEJA BEM-VINDA AO DELASFC APP!</Text>
            <Text style={{ fontSize: "20px" }}>VAMOS JOGAR?</Text>
          </Texts>
        </ImgText>
        <ButtonDiv>
          <Button onClick={() => navigate("/logincadastro")}>INICIAR</Button>
        </ButtonDiv>
      </Interface>
    </Main>
  );
}

export default StartPage;