import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import AxiosApi from '../apis/AxiosApi';
import { MusicContext } from '../context/MusicProvider';
import ArtistGrid from '../components/ArtistGrid';
import FilterSection from '../components/FilterSection';
import { FilterContext } from '../context/FilterProvider';


const Explore = () => {
  const { artists, setArtists } = useContext(MusicContext);
  // const { genreFilters, decadeFilters } = useContext(FilterContext);
  const { filter } = useContext(FilterContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosApi.get(`/artists`);
        console.log(response.data.data.artists);
        setArtists(response.data.data.artists);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(artists.filter((artist) => artist.genre === genreFilters))
  console.log(artists.filter((artist) => artist.genre === filter.genre))
  // console.log(genreFilters);
  let filteredArtists = artists;
  // if(genreFilters) {
  //   filteredArtists = artists.filter((artist) => artist.genre === genreFilters)
  // }
  if(filter.genre) {
    filteredArtists = artists.filter((artist) => artist.genre === filter.genre)
  }
  
  const handleTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <ExploreContainer>
      <FilterColumn>
        <FilterSection handleTypeChange={handleTypeChange}/>
      </FilterColumn>
      <GridColumn>
        <ArtistGrid artists={filteredArtists} />
      </GridColumn>
    </ExploreContainer>
  );
};

const ExploreContainer = styled.div`
  display: flex;
`;

const FilterColumn = styled.div`
  flex: 1;
`;

const GridColumn = styled.div`
  flex: 2;
`;

export default Explore;

