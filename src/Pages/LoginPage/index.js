import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Assets/Delas-Logo.png";
import LoginContainer from "./Components/LoginContainer";
import RegisterContainer from "./Components/RegisterContainer";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 50px 0px;

  @media (max-width: 1000px) {
    width: auto;
    height: auto;
    padding: 7vh 5.8vw 3.8vh 5.8vw;
  }
`;

const Interface = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  
  @media (max-width: 1000px) {
    gap: 50px;
  }
`;

const ContainerImgTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1000px) {
    gap: 3vh;
  }
`;

const ImgTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 1000px) {
    gap: 2vh;
  }
`;

const Img = styled.img`
  width: 150px;

  @media (max-width: 1000px) {
    width: 55vw;
  }
`;

const Text = styled.p`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  cursor: default;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 20%;

  @media (max-width: 1000px) {
    gap: 13px;
    width: 83vw;
  }
`;

const RegisterText = styled.p`
  color: #fff;
  font-size: 18px;
  text-decoration: underline;
  cursor: default;

  @media (max-width: 1000px) {
    font: 1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  color: #523f85;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 0px 8px #0c0c0c9d;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #fff;
    background-color: #523f85;
    border: 2px solid #fff;
  }

  @media (max-width: 1000px) {
    height: 7vh;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleIsRegistering = () => {
    setIsRegistering(!isRegistering);
  }

  return (
    <Main>
      <Interface>
        <ContainerImgTextWrapper>
          <ImgTextWrapper>
            <div>
              <Img src={Logo} alt="" />
            </div>
            <div>
              {isRegistering ? <Text>Para iniciarmos, realize o cadastro.</Text> : <Text>Para iniciarmos, realize o login.</Text>}
            </div>
          </ImgTextWrapper>
          {isRegistering ? <RegisterContainer /> : <LoginContainer />}
        </ContainerImgTextWrapper>
        <RegisterDiv>
          {isRegistering ?
            <RegisterText>Ja tem uma conta?</RegisterText> :
            <RegisterText>Nao tem uma conta?</RegisterText>}
          <Button onClick={toggleIsRegistering}>
            {isRegistering ? "LOGIN" : "CADASTRO"}
          </Button>
        </RegisterDiv>
      </Interface>
    </Main>
  );
}

export default LoginPage;