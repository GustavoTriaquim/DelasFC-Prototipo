import React from "react";
import styled from "styled-components";

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
  padding: 20px 50px;
  background-color: #fff;
  border-radius: 30px;
  border: 3px solid #523f85;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1000px) {
    padding: 15px 5px;
  }
`;

function MainCheckin({ children }) {
  return (
    <Main>
      <BorderA>
        {children}
      </BorderA>
    </Main>
  );
}

export default MainCheckin;