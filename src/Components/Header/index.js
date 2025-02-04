import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from '../../Assets/Delas-Logo.png';
import ProfilePic from '../../Assets/BlackIcon.PNG';
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const HeaderStyle = styled.header`
  width: 100vw;
  height: auto;
  padding: 30px 5%;
`;

const Interface = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  width: 90px;
  height: auto;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.10);
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 0px;
  list-style: none;
  transition: all 0.3s ease;
  width: 70%;

  @media (min-width: 1000px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 150px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.96);
    backdrop-filter: blur(5px);
    padding-top: 60px;
    transition: left 0.3s ease;
    z-index: 1200;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 0px 8px #0c0c0c9d;
    gap: 30px;
  }
`;

const LiStyle = styled.li`
  transition: 0.3s;
  padding: 0px 15px;
  width: 100%;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1000px) {
    text-align: right;
    padding: 0px 30px;
  }
`;

const LinkStyle = styled.a`
  color: #c4c4c4;
  font-size: 23px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <HeaderStyle>
      <Interface>
        <Img
          src={Logo}
          alt="DELASFC"
          onClick={() => navigate("/home")}
        />
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu open={menuOpen}>
          <LiStyle>
            <LinkStyle
              href="/checkinDelasFC">CHECK-IN DELASFC</LinkStyle>
          </LiStyle>
          <LiStyle>
            <LinkStyle
              href="/checkinPeladas">CHECK-IN PELADAS</LinkStyle>
          </LiStyle>
          <LiStyle>
            <LinkStyle
              href="#">CONTATE-NOS</LinkStyle>
          </LiStyle>
        </NavMenu>
        <Img
          src={ProfilePic}
          alt="Perfil"
          style={{ borderRadius: "100%", width: "auto", height: "70px", border: "2px solid #fff" }}
        />
      </Interface>
    </HeaderStyle>
  );
}

export default Header;