import React from 'react'
import styled from 'styled-components'

const TextImageSideBySide = () => {
  return (
    <HeaderSection>
      <ContentContainer>
        <Title>TuneRank</Title>
        <Subtitle>Discover new music and share your favorite tracks.</Subtitle>
        <Button>Get started</Button>
      </ContentContainer>
      <HeroImage src={require("../assets/siteImgs/header_records.jpg")} />
    </HeaderSection>
  )
}

export default TextImageSideBySide;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ContentContainer = styled.div`
  max-width: 500px;
  margin: 50px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 100px 0 0 100px;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #555;
  margin-bottom: 40px;
`;

const Button = styled.button`
  height: 46px;
  width: 200px;
  border: none;
  background-color: #f60;
  color: #fff;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f90;
  }
`;

const HeroImage = styled.img`
  max-width: 600px;
  height: auto;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid black;
  border-radius: 10px;
  margin-top: 50px;
  @media (min-width: 768px) {
    flex: 1;
  }
`;