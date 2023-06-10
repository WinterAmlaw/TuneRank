import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../context/FilterProvider';
import FilterDropdown from './FilterDropdown';

const FilterSection = ({ handleTypeChange }) => {
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const [isDecadesOpen, setIsDecadesOpen] = useState(false);


  const { genreFilters, setGenreFilters, decadeFilters, setDecadeFilters } = useContext(FilterContext)

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
    const checkboxes = document.querySelectorAll("#genreCheckbox");
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
      if(checkbox !== event.target) checkbox.checked = false;
    })
    if (event.target.checked) {
      setGenreFilters(event.target.value);
    } else {
      setGenreFilters(null);
    }
  };

  const handleDecadeChange = (event) => {
    if (event.target.checked) {
      setDecadeFilters(event.target.value);
    } else {
      setDecadeFilters(null);
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

      <FilterLabel onClick={() => setIsGenresOpen(!isGenresOpen)}>
        Genres:
        {isGenresOpen ? <ArrowIcon className="up-arrow" /> : <ArrowIcon />}

      </FilterLabel>
      {isGenresOpen && genres && genres.map((genre) => (
        <FilterDropdown 
          key={`genre-${genre}`}
          value={genre}
          onChange={handleGenreChange}
          filterType='genre'
        />
      ))}

      <FilterLabel onClick={() => setIsDecadesOpen(!isDecadesOpen)}>
        Decades:
        {isDecadesOpen ? <ArrowIcon className="up-arrow" /> : <ArrowIcon />}

      </FilterLabel>      
      {isDecadesOpen && decades && decades.map((decade) => (
        <FilterDropdown 
          key={`decade-${decade}`}
          value={decade}
          onChange={handleDecadeChange}
          filterType='decade'
        />
      ))}
    </FilterContainer>
  );
};


const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
  margin-left: 10px;
  &.up-arrow {
    transform: rotate(180deg);
  }
`;
// #3C3CB2
// #162447
// #554D71
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  background-color:#1D1A36;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

const FilterSelect = styled.select`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;



export default FilterSection;
