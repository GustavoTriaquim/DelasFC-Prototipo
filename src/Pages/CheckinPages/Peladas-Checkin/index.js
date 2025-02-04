import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Header";
import MainCheckin from "../Components/MainCheckin";
import CheckinSection from "../CheckinSection";
import Footer from "../../../Components/Footer";

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

function PeladasCheckin() {
  return (
    <>
      <Header />
      <Title>CHECK-IN PELADAS</Title>
      <MainCheckin>
        <CheckinSection
          title="TIME A"
          trainings={["Data - Horario - End."]}
        />
        <HR />
        <CheckinSection
          title="TIME B"
          trainings={["Data - Horario - End."]}
        />
      </MainCheckin>
      <Footer />
    </>
  );
}

export default PeladasCheckin;