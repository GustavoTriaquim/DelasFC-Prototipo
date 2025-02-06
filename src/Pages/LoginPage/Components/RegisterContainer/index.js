import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const BorderA = styled.div`
  width: 40vw;
  height: 53vh;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  padding: 5px;
  box-shadow: 0px 0px 8px #0c0c0c9d;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    width: 100%;
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
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1000px) {
    padding: 20px 10px;
  }
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: start;
  gap: 30px;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

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

const Input = styled.div`
  width: 100%;
  background-color: #e4e4e4;
  padding: 15px;
  border-radius: 40px;
`;

const ButtonDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const CheckBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HiddenCheckBox = styled.input`
  display: none;
`;

const CustomCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid #523f85;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#523f85' : 'transparent')};
  color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
`;

function RegisterContainer() {
  const navigate = useNavigate();
  const [selectedCheck, setSelectedCheck] = useState("");

  const handleCheckboxChange = (value) => {
    setSelectedCheck(selectedCheck === value ? "" : value);
  };

  return (
    <BorderA>
      <BorderB>
        <BorderC>
          <Form>
            <Inputs>
              <Text2>Nome Completo</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
            <Inputs>
              <Text2>CPF</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
            <Inputs>
              <Text2>Data de Nascimento</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
            <Inputs>
              <Text2>E-mail</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
            <Inputs>
              <Text2>Senha</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
            <Inputs>
              <Text2>Confirmar Senha</Text2>
              <Input>
                <p style={{ textAlign: "center", cursor: "default", color: "#999", fontWeight: "bold" }}>Formulario Ilustrativo</p>
              </Input>
            </Inputs>
          </Form>
          <CheckBoxes>
            <CheckBox
              onClick={() => handleCheckboxChange("atleta")}
            >
              <HiddenCheckBox
                type="checkbox"
                checked={selectedCheck === "atleta"}
              />
              <CustomCheck selected={selectedCheck === "atleta"}>
                {selectedCheck === "atleta" && <FaCheck />}
              </CustomCheck>
              <p style={{ cursor: "pointer" }}>Sou atleta</p>
            </CheckBox>
            <CheckBox
              onClick={() => handleCheckboxChange("propietario")}
            >
              <HiddenCheckBox
                type="checkbox"
                checked={selectedCheck === "propietario"}
                readOnly
              />
              <CustomCheck selected={selectedCheck === "propietario"}>
                {selectedCheck === "propietario" && <FaCheck />}
              </CustomCheck>
              <p style={{ cursor: "pointer" }}>Propietario(a) do time</p>
            </CheckBox>
          </CheckBoxes>
          <ButtonDiv>
            <Button onClick={() => navigate("/home")}>Fazer Cadastro</Button>
          </ButtonDiv>
        </BorderC>
      </BorderB>
    </BorderA>
  );
}

export default RegisterContainer;