import React from 'react';
import styled from 'styled-components';


const Profile = () => {
  return (
    <ProfileContainer>
      <div>
        <ProfileHeader>
          <ProfileImage src="https://randomuser.me/api/portraits/women/50.jpg" alt="Profile Picture" />
          <div>
            <MainTitle>Samantha Smith</MainTitle>
            <PreferenceSection>
              <PreferenceTag>Rock</PreferenceTag>
              <PreferenceTag>Metal</PreferenceTag>
              <PreferenceTag>Pop</PreferenceTag>
              <PreferenceTag>Jazz</PreferenceTag>
              <PreferenceTag>Classical</PreferenceTag>
            </PreferenceSection>
          </div>
        </ProfileHeader>
        
        <AboutSection>
          <SectionTitle>About Me:</SectionTitle>
          <ProfileDescription>
            Hi, I'm Samantha! I'm a huge music lover and enjoy listening to a variety of genres including rock, metal, pop, jazz, and classical. When I'm not listening to music, I enjoy hiking, reading, and spending time with my cats.
          </ProfileDescription>
        </AboutSection>

        <ReviewContainer>
          <ReviewCard>
            <ReviewTitle>Thriller</ReviewTitle>
            <ReviewRating>5 stars</ReviewRating>
            <ReviewText>This album is an absolute classic and one of my all-time favorites. Michael Jackson was a true genius and this album showcases his incredible talent. Every song is a hit!</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <ReviewTitle>The Wall</ReviewTitle>
            <ReviewRating>4 stars</ReviewRating>
            <ReviewText>Pink Floyd's The Wall is a masterpiece of progressive rock. While some of the songs can be a bit depressing, the overall concept of the album is fascinating and thought-provoking.</ReviewText>
          </ReviewCard>
          <ReviewCard>
            <ReviewTitle>Back in Black</ReviewTitle>
            <ReviewRating>5 stars</ReviewRating>
            <ReviewText>AC/DC is one of my favorite bands and Back in Black is one of their best albums. Every song is a classic and the album as a whole is a must-listen for any rock fan.</ReviewText>
          </ReviewCard>
        </ReviewContainer>

      </div>

      <div>
        <SectionTitle>Albums Added:</SectionTitle>
        <AlbumContainer>
          <AlbumCard>
            <AlbumImage src="https://picsum.photos/id/1018/300/300" />
            <AlbumTitle>Master of Puppets</AlbumTitle>
            <AlbumArtist>Metallica</AlbumArtist>
          </AlbumCard>
          <AlbumCard>
            <AlbumImage src="https://picsum.photos/id/1015/300/300" />
            <AlbumTitle>Bad</AlbumTitle>
            <AlbumArtist>Michael Jackson</AlbumArtist>
          </AlbumCard>
          <AlbumCard>
            <AlbumImage src="https://picsum.photos/id/1019/300/300" />
            <AlbumTitle>A Night at the Opera</AlbumTitle>
            <AlbumArtist>Queen</AlbumArtist>
          </AlbumCard>
        </AlbumContainer>

        <SectionTitle>Favorite Artists:</SectionTitle>
        <ArtistContainer>
          <ArtistCard>
            <ArtistImage src="https://picsum.photos/id/1042/300/300" />
            <ArtistName>Metallica</ArtistName>
            <ArtistGenre>Heavy Metal</ArtistGenre>
          </ArtistCard>
          <ArtistCard>
            <ArtistImage src="https://picsum.photos/id/1039/300/300" />
            <ArtistName>Michael Jackson</ArtistName>
            <ArtistGenre>Pop</ArtistGenre>
          </ArtistCard>
          <ArtistCard>
            <ArtistImage src="https://picsum.photos/id/1054/300/300" />
            <ArtistName>Queen</ArtistName>
            <ArtistGenre>Rock</ArtistGenre>
          </ArtistCard>
        </ArtistContainer>
      </div>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f9f9f9;
  overflow-x: hidden;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PreferenceSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding-right: 20px;
`;

const PreferenceTag = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  margin: 5px;
  cursor: pointer;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
  padding: 0 20%;
`;

const ProfileDescription = styled.p`
  font-size: 20px;
  color: #333;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
`;

const AlbumContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%; 
  margin-top: 50px;
`;

const AlbumCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 350px;
  width: 80%;
  margin: 20px;
  display:flex;
  flex-direction:column;
`;

const AlbumImage = styled.img`
  height: 300px;
  object-fit: cover; 
  margin-bottom: 20px;
`;

const AlbumTitle = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AlbumArtist = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

const ArtistContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%; 
  margin-top: 50px;
`;

const ArtistCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 350px;
  width: 80%;
  margin: 20px;
  display:flex;
  flex-direction:column;
`;

const ArtistImage = styled.img`
  height: 300px;
  object-fit: cover; 
  margin-bottom: 20px;
`;

const ArtistName = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ArtistGenre = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%; 
  margin-top: 50px;
`;

const ReviewCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 350px;
  width: 80%;
  margin: 20px;
  display:flex;
  flex-direction:column;
`;

const ReviewTitle = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReviewText = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const ReviewRating = styled.p`
  font-size: 16px;
  color: #999;
  margin-bottom: 10px;
`;
