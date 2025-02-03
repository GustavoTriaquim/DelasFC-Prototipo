import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin: 10px auto 30px auto;
  padding: 0px 0px 40px 0px;
  ${({ isLast }) => !isLast && "border-bottom: 1px solid #523f85;"}

  @media (max-width: 1000px) {
    max-width: 90%;
    gap: 15px;
    padding: 0px 10px 30px 10px;
  } 
`;

const EventTitle = styled.h1`
  font-size: 35px;
  color: #523f85;
  text-align: center;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

const EventInfo = styled.div`
  background-color: #efefef;
  padding: 20px 67px 20px 67px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #cccccc;
  max-width: 1000px;

  @media (max-width: 1000px) {
    padding: 15px;
    max-width: 100%;
  }
`;

const EventInfoBg = styled.div`
  background-color: #272727;
  border-radius: 15px;
  margin-bottom: 20px;
  max-width: 100%;
`;

const DivTeamPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #523f85;
  padding: 15px 0px;
`;

const TeamPicture = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;

  @media (max-width: 1000px) {
    max-width: 250px;
  }
`;

const EventText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: start;
  gap: 20px;
  width: 100%;
  background-color: #f7f7f7;
  border: none;
  border-radius: 0px 0px 15px 15px;
  padding: 20px 0px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 20px 13px;
  }
`;

const Text = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #523f85;
  text-align: center;

  @media (max-width: 1000px){
    text-align: left;
    font-size: 20px;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: #523f85;
  font-weight: bold;
  background-color: #fff;
  border: 2px solid #523f85;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #efefef;
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    height: 45px;
    font-size: 20px;
    
    &:hover {
      background-color: #fff;
      transform: none;
    }

    &:active {
      color: #fff;
      background-color: #523f85;
      border: 2px solid #fff;
    }
  }
`;

const Slides = styled(Slider)`
  margin-bottom: 50px;
  max-width: 100%;
`;

const CustomArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #523f85;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.slick-prev {
    left: -50px;
  }

  &.slick-next {
    right: -50px;
  }

  &:hover {
    background-color: #523f85;
    border-radius: 50%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <CustomArrow className="slick-prev" onClick={onClick} />;
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <CustomArrow className="slick-next" onClick={onClick} />;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

function EventsContainer({ title, events, isLast, buttonClick }) {
  return (
    <Event isLast={isLast}>
      <EventTitle>{title}</EventTitle>
      <EventInfo>
        <Slides {...sliderSettings}>
          {events.map((event, index) => (
            <EventInfoBg key={index}>
              <DivTeamPicture>
                <TeamPicture src={event.picture} alt={event.alt} />
              </DivTeamPicture>
              <EventText>
                <Text>{event.team}</Text>
                <Text>{event.date}</Text>
                <Text>{event.address}</Text>
                <Text>{event.time}</Text>
              </EventText>
            </EventInfoBg>
          ))}
        </Slides>
        <ButtonDiv>
          <Button onClick={buttonClick}>VER MAIS</Button>
        </ButtonDiv>
      </EventInfo>
    </Event>
  );
}

export default EventsContainer;