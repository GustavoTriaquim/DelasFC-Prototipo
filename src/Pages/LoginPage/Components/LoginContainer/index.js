import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BorderA = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  padding: 5px;
  box-shadow: 0px 0px 8px #0c0c0c9d;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    height: auto;
    margin-bottom: -30px;
  }
`;

const BorderB = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px solid #523f85;
  border-radius: 30px;
  padding: 4px;
`;

const BorderC = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #523f85;
  border-radius: 30px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10%;

  @media (max-width: 1000px) {
    padding: 20px 10px;
    gap: 30px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  
  @media (max-width: 1000px) {
    gap: 15px;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

const Text2 = styled.h2`
  font-size: 30px;
  color: #523f85;
  cursor: default;
  text-align: center;
  
  @media (max-width: 1000px) {
    font-size: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: #e4e4e4;
  padding: 15px;
  border-radius: 40px;
  text-align: center;
  color: #0c0c0c;
  font-weight: bold;
  border: none;
  font-size: 15px;

  &::placeholder {
    color: #999;
  }
`;

const ButtonDiv = styled.div`
  width: 80%;
`;

const Button = styled.button`
  width: 100%;
  color: #fff;
  border-radius: 10px;
  background-color: #523f85;
  border: none;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #523f85;
    background-color: #e4e4e4;
    border: 2px solid #523f85;
  }
`;

function LoginContainer() {
  const navigate = useNavigate();

  return (
    <BorderA>
      <BorderB>
        <BorderC>
          <Form>
            <Inputs>
              <Text2>E-mail</Text2>
              <Input type="email" placeholder="Digite Seu E-mail" />
            </Inputs>
            <Inputs>
              <Text2>Senha</Text2>
              <Input type="password" placeholder="Digite Sua Senha" />
            </Inputs>
          </Form>
          <ButtonDiv>
            <Button onClick={() => navigate("/home")}>Fazer Login</Button>
          </ButtonDiv>
        </BorderC>
      </BorderB>
    </BorderA>
  );
}

export default LoginContainer;