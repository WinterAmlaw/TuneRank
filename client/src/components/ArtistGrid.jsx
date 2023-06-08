import React, { useState, useContext} from 'react';
import styled from 'styled-components';


const ArtistGrid = ({ artists }) => {
  return (
    <CardGrid>
      {artists &&
        artists.map((artist) => (
          <CardLink key={artist.id} href={`/artist/${artist.id}`}>
            <Image src={`${artist.image_url}`} alt="couldn't load image" />
            <Title>{artist.name}</Title>
            <Genre>{artist.genre}</Genre>
          </CardLink>
        ))}
    </CardGrid>
  );
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const CardLink = styled.a`
  display: block;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const Genre = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export default ArtistGrid;