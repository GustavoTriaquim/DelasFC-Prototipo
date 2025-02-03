import React from "react"
import styled from "styled-components";
import Header from "../../../Components/Header";
import MainCheckin from "../Components/MainCheckin";
import Footer from "../../../Components/Footer";
import CheckinSection from "../CheckinSection";

const HR = styled.hr`
  margin-top: 20px;
  border: none;
  height: 2px;
  background-color: #523f85;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 30px 0px;
  color: #fff;
  font-size: 40px;

  @media (max-width: 1000px) {
    margin: 15px 0px 40px 0px;
    font-size: 33px;
  }
`;

function DelasFCCheckin() {
  return (
    <>
      <Header />
      <Title>CHECK-IN DELASFC</Title>
      <MainCheckin>
        <CheckinSection
          title="Treino Iniciante"
          trainings={["Data 1 - Horario 1 - End. 1", "Data 2 - Horario 2 - End. 2"]}
        />
        <HR />
        <CheckinSection
          title="Treino Adulto"
          trainings={["Data 1 - Horario 1 - End. 1", "Data 2 - Horario 2 - End. 2"]}
        />
        <HR />
        <CheckinSection
          title="Treino Crossfut Sabado"
          trainings={["Data 1 - Horario 1 - End. 1"]}
        />
      </MainCheckin>
      <Footer />
    </>
  );
}

export default DelasFCCheckin;