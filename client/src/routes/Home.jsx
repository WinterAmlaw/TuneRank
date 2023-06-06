import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomeContainer>
      <HeaderSection>
      <ContentContainer>
        <Title>TuneRank</Title>
        <Subtitle>Discover new music and share your favorite tracks.</Subtitle>
        <Button>Get started</Button>
      </ContentContainer>
      <HeroImage src={require("../assets/siteImgs/header_records.jpg")} />
      </HeaderSection>
      <Section>
        <SectionTitle>About TuneRank</SectionTitle>
        <SectionText>TuneRank is a website where you can rate and review your favorite music, discover new artists and tracks, and connect with other musicians who share your taste in music. Whether you're looking to collaborate, get feedback on your own music, or simply find inspiration, TuneRank has everything you need to take your music to the next level.</SectionText>
      </Section>
      <SectionAlternate>
        <SectionTitleAlternate>Our Features</SectionTitleAlternate>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon className="bi bi-headphones"></FeatureIcon>
            <FeatureTitle>Listen to Music</FeatureTitle>
            <FeatureDescription>Stream and listen to your favorite tracks and albums.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon className="bi bi-binoculars"></FeatureIcon>
            <FeatureTitle>Discover</FeatureTitle>
            <FeatureDescription>Discover new artists and tracks that match your taste.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon className="bi bi-star"></FeatureIcon>
            <FeatureTitle>Rate and Review</FeatureTitle>
            <FeatureDescription>Rate and review your favorite music, and provide feedback to other musicians.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon className="bi bi-people"></FeatureIcon>
            <FeatureTitle>Connect</FeatureTitle>
            <FeatureDescription>Connect with other musicians who share your taste in music and collaborate on projects.</FeatureDescription>
          </FeatureCard>          
        </FeaturesGrid>
      </SectionAlternate>
      <TestimonialsContainer>
        <TestimonialCard>
          <TestimonialText>"TuneRank has helped me discover so many new artists and tracks that I never would have found otherwise. It's also a great place to connect with other musicians and collaborate on projects."</TestimonialText>
          <TestimonialInfo>
            <TestimonialAvatar src="https://randomuser.me/api/portraits/men/65.jpg" alt="John Smith"/>
            <TestimonialAuthor>John Smith</TestimonialAuthor>
          </TestimonialInfo>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>"I love using TuneRank to get feedback on my own music and see how it resonates with other people. It's also a great platform for discovering new sounds and connecting with fellow musicians."</TestimonialText>
          <TestimonialInfo>
            <TestimonialAvatar src="https://randomuser.me/api/portraits/women/67.jpg" alt="Jane Doe"/>
            <TestimonialAuthor>Jane Doe</TestimonialAuthor>
          </TestimonialInfo>
        </TestimonialCard>
      </TestimonialsContainer>
      <Footer>
        <FooterText>© 2023 TuneRank. All rights reserved.</FooterText>
      </Footer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const Section = styled.div`
  max-width: 900px;
  margin: 0px auto;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;


  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const SectionAlternate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #f5f5f5;
  padding: 100px 0;
  // margin: 0 auto;
  justify-content:center;

  // @media (min-width: 768px) {
  //   padding: 50px 0;
  // }
`;

const SectionTitleAlternate = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 100px;
    margin-right: 100px;
  }
`;

const FeatureCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const FeatureIcon = styled.i`
  font-size: 36px;
  color: #f60;
  margin-bottom: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const FeatureDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 400px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const TestimonialText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const TestimonialInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const TestimonialAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

const TestimonialAuthor = styled.span`
  font-size: 18px;
  color: #555;
  font-weight: bold;
`;

const Footer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
`;
export default HomePage;