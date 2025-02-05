import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCalendar, FaCheck, FaRegCheckCircle } from "react-icons/fa";

const CheckinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 60px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 8px #c2c1c19d;
  padding: 2%;

  @media (max-width: 1000px) {
    box-shadow: none;
    gap: 15px;
  }
`;

const CheckinItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 2vh;
`;

const CalendarStyle = styled(FaCalendar)`
  font-size: 210px;
  color: #464646;

  @media (max-width: 1000px) {
    font-size: 6.25rem;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #523f85;
  color: #fff;
  font-size: 23px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #464646;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 12px;
    padding: 20px 7px;
    width: 28vw;
  }
`;

const CheckinOptions = styled.div`
  padding: 20px;
  border: none;
  box-shadow: 0px 0px 8px #0c0c0c3b;
  border-radius: 5px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

const OptionsTitle = styled.h3`
  font-size: 25px;
  color: #523f85;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

const CheckListContainer = styled.div`
  margin-top: 10px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#d8cfee !important" : "#e8e8e8")};
  margin-bottom: 5px;
  transition: 0.3s;
  width: 100%;
  font-size: 20px;
  gap: 10px;
  font-weight: bold;
  color: #523f85;
  
  &:hover {
    background: #cccccc;
  }

  @media (max-width: 1000px) {
    padding: 12px;
    font-size: 13px;
    transition: 0s;

    &:hover {
      background: #e8e8e8;
    }
  }
`;

const CheckInput = styled.input`
  margin-right: 10px;
  position: absolute;
  opacity: 0;
`;

const CustomCheck = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background: ${(props) => (props.selected ? "#532f85" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "transparent")};
  transition: 0.3s;
  margin-right: 10px;
  font-size: 16px;
`;

/* MODAL */

const ModalOverlay = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  color: #523f85;
  text-align: center;
  margin: 0px 0px 20px 0px;
`;

const ModalForm = styled.div`
  padding: 20px 40px;
  background-color: #fafafa;
  border: 1px solid #e7e7e7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
  margin-bottom: 20px;
  width: 80%;
`;

const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;

const ModalLabel = styled.h4`
  font-size: 25px;
  color: #523f85;
  text-align: center;
`;

const ModalInput = styled.div`
  width: 120%;
  background-color: #e4e4e4;
  padding: 15px;
  border-radius: 40px;
`;

const ModalPlaceholder = styled.p`
  text-align: center;
  cursor: default;
  color: #999;
  font-weight: bold;
  font-size: 18px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

const ModalButton = styled.button`
  width: 150px;
  padding: 15px;
  border: none;
  background-color: #523f85;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const ModalIcon = styled(FaRegCheckCircle)`
  font-size: 100px;
  margin-bottom: 40px;
  color: green;
`;

function CheckinSection({ title, trainings }) {
  const [selectedOption, setSelectedOption] = useState([]);

  const toggleSelection = (index) => {
    setSelectedOption((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  /*MODAL*/

  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [isModalConfirmedOpen, setIsModalConfirmedOpen] = useState(false);

  const handleCheckinClick = () => {
    setIsModalConfirmOpen(true);
  };

  const handleConfirmationClick = () => {
    setIsModalConfirmedOpen(true);
    setIsModalConfirmOpen(false);
  }

  const handleCloseModalConfirm = () => {
    setIsModalConfirmOpen(false);
  };

  const handleCloseModalConfirmed = () => {
    setIsModalConfirmedOpen(false);
  };

  useEffect(() => {
    if (isModalConfirmOpen || isModalConfirmedOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalConfirmOpen, isModalConfirmedOpen]);

  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "35px", color: "523f85" }}>
        {title}
      </h2>
      <CheckinContainer>
        <CheckinItems>
          <CalendarStyle />
          <Button onClick={handleCheckinClick}>Fazer Check-in</Button>
        </CheckinItems>
        <CheckinOptions>
          <OptionsTitle>Selecione o Treino</OptionsTitle>
          <CheckListContainer>
            {trainings.map((training, index) => {
              const isSelected = selectedOption.includes(index);

              return (
                <CheckItem
                  key={index}
                  selected={isSelected}
                  onClick={() => toggleSelection(index)}
                >
                  <CheckInput
                    type="checkbox"
                    id={`check-${index}`}
                    checked={isSelected}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleSelection(index);
                    }}
                  />
                  <CustomCheck selected={isSelected}>
                    {isSelected && <FaCheck />}
                  </CustomCheck>
                  {training}
                </CheckItem>
              );
            })}
          </CheckListContainer>
        </CheckinOptions>
      </CheckinContainer>

      {/* MODAL */}

      <ModalOverlay $isOpen={isModalConfirmOpen} onClick={handleCloseModalConfirm}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Title>CONFIRME SEU CHECK-IN</Title>
          <ModalForm>
            <ModalInputs style={{ marginTop: "5px" }}>
              <ModalLabel>E-mail</ModalLabel>
              <ModalInput>
                <ModalPlaceholder>Formulario Ilustrativo</ModalPlaceholder>
              </ModalInput>
            </ModalInputs>
            <ModalInputs style={{ marginBottom: "15px" }}>
              <ModalLabel>Senha</ModalLabel>
              <ModalInput>
                <ModalPlaceholder>Formulario Ilustrativo</ModalPlaceholder>
              </ModalInput>
            </ModalInputs>
          </ModalForm>
          <ModalButtons>
            <ModalButton onClick={handleConfirmationClick}>CONFIRMAR</ModalButton>
            <ModalButton onClick={handleCloseModalConfirm}>CANCELAR</ModalButton>
          </ModalButtons>
        </ModalContent>
      </ModalOverlay>

      <ModalOverlay $isOpen={isModalConfirmedOpen} onClick={handleCloseModalConfirmed}>
        <ModalContent onClick={(e) => e.stopPropagation()} style={{ paddingTop: "60px" }}>
          <ModalForm style={{ gap: "10px" }}>
            <Title>CHECK-IN CONFIRMADO!</Title>
            <Title style={{ marginBottom: "40px" }}>NOS VEMOS EM QUADRA!</Title>
            <ModalIcon />
          </ModalForm>
          <div>
            <ModalButton onClick={handleCloseModalConfirmed}>FECHAR</ModalButton>
          </div>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default CheckinSection;