import React, { useState } from 'react';
import styled from 'styled-components';


const FilterSection = ({ handleTypeChange }) => {
  const [genreFilters, setGenreFilters] = useState([]);
  const [decadeFilters, setDecadeFilters] = useState([]);

  const genres = [
    "Rock",
    "Pop",
    "Hip-hop",
    "Electronic",
    "Country",
    "Jazz",
    "Classical"
  ];

  const decades = ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s"];

  const handleGenreChange = (event) => {
    if (event.target.checked) {
      setGenreFilters([...genreFilters, event.target.value]);
    } else {
      setGenreFilters(genreFilters.filter((filter) => filter !== event.target.value));
    }
  };

  const handleDecadeChange = (event) => {
    if (event.target.checked) {
      setDecadeFilters([...decadeFilters, event.target.value]);
    } else {
      setDecadeFilters(decadeFilters.filter((filter) => filter !== event.target.value));
    }
  };

  return (
    <FilterContainer>
      <FilterHeading>Filter</FilterHeading>
      <FilterLabel htmlFor="type-select">Type:</FilterLabel>
      <FilterSelect id="type-select" onChange={handleTypeChange}>
        <option value="artist">Artist</option>
        <option value="album">Album</option>
        <option value="song">Song</option>
      </FilterSelect>

      <FilterLabel>Genres:</FilterLabel>
      {genres.map((genre) => (
        <CheckboxLabel key={`genre-${genre}`}>
          <StyledCheckbox
            type="checkbox"
            value={genre}
            checked={genreFilters.includes(genre)}
            onChange={handleGenreChange}
          />
          <Checkmark />
          {genre}
        </CheckboxLabel>
      ))}

      <FilterLabel>Decades:</FilterLabel>
      {decades.map((decade) => (
        <CheckboxLabel key={`decade-${decade}`}>
          <StyledCheckbox
            type="checkbox"
            value={decade}
            checked={decadeFilters.includes(decade)}
            onChange={handleDecadeChange}
          />
          <Checkmark />
          {decade}
        </CheckboxLabel>
      ))}
    </FilterContainer>
  );
};


const FilterContainer = styled.div`
  background-color:  #162447;
  padding: 20px;
  border-radius: 5px;
`;

const FilterHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
  text-transform: uppercase;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: white;
`;

const FilterSelect = styled.select`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const CheckboxLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: white;
`;

const Checkmark = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ ${Checkmark}::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 5px auto;
    border-radius: 50%;
    background-color: #fff;
  }
`;


export default FilterSection;
