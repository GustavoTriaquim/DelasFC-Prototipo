import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Main = styled.main`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 30px;
  padding: 7px;
`;

const BorderA = styled.div`
  background-color: #fff;
  border: 2px solid #523f85;
  border-radius: 30px;
  padding: 0px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactsContainer = styled.div`
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 30px;
  width: 50%;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px #0c0c0ca8;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    width: 75%;
    
    &:active {
      background-color:rgb(211, 211, 211);
    }
  }
`;

const Title = styled.h1`
  color: #523f85;
  font-size: 35px;
  text-align: center;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0px 0px 0px;
  margin-bottom: 10px;
`;

const Whatsapp = styled(FaWhatsapp)`
  font-size: 30px;
  color: #523f85;
`;

const Instagram = styled(FaInstagram)`
  font-size: 30px;
  color: #523f85;
`;

const Email = styled(MdEmail)`
  font-size: 30px;
  color: #523f85;
`;

const Text = styled.p`
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const HR = styled.hr`
  background-color: #523f85;
  border: none;
  width: 50%;
  height: 1px;

  @media (max-width: 1000px) {
    width: 75%;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 15px;
  font-size: 20px;
  color: #fff;
  border: none;
  border-radius: 20px;
  background-color: #523f85;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    &:active {
      background-color: #fff;
      border: 2px solid #523f85;
      color: #523f85;
    }
  }
`;

function ContactPage() {
  return (
    <>
      <Header />
      <div>
        <h1 style={{ margin: "15px 0px", textAlign: "center", color: "#fff", fontSize: "40px" }}>FORMAS DE CONTATO</h1>
      </div>
      <Main>
        <BorderA>
          <ContactsContainer>
            <InfoDiv>
              <Title>WHATSAPP</Title>
              <Whatsapp />
            </InfoDiv>
            <Text>+00 0 0000-0000</Text>
          </ContactsContainer>
          <HR />
          <ContactsContainer>
            <InfoDiv>
              <Title>INSTAGRAM</Title>
              <Instagram />
            </InfoDiv>
            <Text>@instagrampage</Text>
          </ContactsContainer>
          <HR />
          <ContactsContainer>
            <InfoDiv>
              <Title>E-MAIL</Title>
              <Email />
            </InfoDiv>
            <Text>email.example@org.com</Text>
          </ContactsContainer>
        </BorderA>
      </Main>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <HR style={{ margin: "20px 0px", backgroundColor: "#fff", width: "99%" }} />
      </div>
      <Main>
        <BorderA style={{ padding: "20px 0px", gap: "30px" }}>
          <Title>DEIXE AQUI SEU FEEDBACK</Title>
          <Button>FEEDBACK</Button>
        </BorderA>
      </Main>
      <Footer />
    </>
  );
}

export default ContactPage;