import React, { useState } from "react";
import styled from "styled-components";
import { FaCalendar, FaCheck } from "react-icons/fa";

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

function CheckinSection({ title, trainings }) {
  const [selectedOption, setSelectedOption] = useState([]);

  const toggleSelection = (index) => {
    setSelectedOption((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "35px", color: "523f85" }}>
        {title}
      </h2>
      <CheckinContainer>
        <CheckinItems>
          <CalendarStyle />
          <Button>Fazer Check-in</Button>
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
    </>
  );
};

export default CheckinSection;