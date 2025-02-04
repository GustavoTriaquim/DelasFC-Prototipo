import React from "react";
import styled from "styled-components";
import TeamPic from "../../../../Assets/TemLogo.png";
import DelasPic from "../../../../Assets/Delas-Logo.png";
import EventsContainer from "./Components/EventsContainer";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 7px;
  background-color: #fff;
  border-radius: 30px;
  border: none;
`;

const BorderA = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  background-color: #fff;
  border-radius: 30px;
  border: 3px solid #523f85;
  max-width: 100%;
`;

function HomeContainer() {
  const navigate = useNavigate();

  return (
    <Main>
      <BorderA>
        <EventsContainer
          isLast={false}
          title="TREINOS DELASFC"
          events={[
            {
              picture: DelasPic,
              alt: "DELASFC",
              team: "DelasFC - Iniciantes",
              date: "Data A - Iniciantes",
              address: "APCEF/PR",
              time: "Horario A - Iniciantes",
            },
            {
              picture: DelasPic,
              alt: "DELASFC",
              team: "DelasFC - Adulto",
              date: "Data A - Adulto",
              address: "APCEF/PR",
              time: "Horario A - Adulto",
            },
            {
              picture: DelasPic,
              alt: "DELASFC",
              team: "DelasFC - Iniciantes",
              date: "Data B - Iniciantes",
              address: "APCEF/PR",
              time: "Horario B - Iniciantes",
            },
            {
              picture: DelasPic,
              alt: "DELASFC",
              team: "DelasFC - Adulto",
              date: "Data B - Adulto",
              address: "APCEF/PR",
              time: "Horario B - Adulto",
            }
          ]}
          buttonClick={() => navigate("/checkinDelasFC")}
        />
        <EventsContainer
          isLast={true}
          title="PELADAS DELASFC"
          events={[
            {
              picture: TeamPic,
              alt: "Time A",
              team: "TIME A",
              date: "Data A",
              address: "End. A",
              time: "Horario A",
            },
            {
              picture: TeamPic,
              alt: "Time B",
              team: "TIME B",
              date: "Data B",
              address: "End. B",
              time: "Horario B",
            }
          ]}
          buttonClick={() => navigate("/checkinPeladas")}
        />
      </BorderA>
    </Main>
  );
}

export default HomeContainer;