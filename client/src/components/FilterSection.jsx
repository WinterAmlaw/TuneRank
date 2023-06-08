import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../context/FilterProvider';
import FilterDropdown from './FilterDropdown';

const FilterSection = ({ handleTypeChange }) => {
  const [isGenresOpen, setIsGenresOpen] = useState(false);


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
        // <CheckBoxContainer  key={`genre-${genre}`}>
  
        //     <StyledCheckbox
        //       id="genreCheckbox"
        //       type="checkbox"
        //       value={genre}
        //       // checked={() => genreFilters.includes(genre)}
        //       onChange={handleGenreChange}
        //     />
        //     <Checkmark />
        //   <CheckboxLabel>
        //     {genre}
        //   </CheckboxLabel>            
        // </CheckBoxContainer>
        <FilterDropdown 
          key={`genre-${genre}`}
          value={genre}
          // checked={() => genreFilters.includes(genre)}
          onChange={handleGenreChange}
          filterType='genre'
        />
        // value, checked, onChange, filterType, label
      ))}

      <FilterLabel>Decades:</FilterLabel>
      {decades && decades.map((decade) => (
        <CheckboxLabel key={`decade-${decade}`}>
          <StyledCheckbox
            type="checkbox"
            value={decade}
            // checked={() => decadeFilters.includes(decade)}
            onChange={handleDecadeChange}
          />
          <Checkmark />
          {decade}
        </CheckboxLabel>
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

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const CheckboxLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-left: 12px;
  margin: auto 0px;
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
