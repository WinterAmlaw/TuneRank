// import e from 'express';
import React, { useContext } from 'react';
import styled from "styled-components";
import { FilterContext } from '../context/FilterProvider';

const FilterDropdown = ({ value, checked, filterType }) => {
  const { filter, setFilter } = useContext(FilterContext);  
  console.log(filter);
  const handleFilterChange = (event) => {
    const checkboxes = document.querySelectorAll(`#${filterType}Checkbox`);
    console.log(checkboxes);
    checkboxes.forEach(checkbox => {
      if(checkbox !== event.target) checkbox.checked = false;
    })
    // if (event.target.checked) {
    //   setGenreFilters(event.target.value);
    // } else {
    //   setGenreFilters(null);
    // }
    // if (event.target.checked) {
    //   setFilter({event.target.value});
    // } else {
      switch (filterType) {
        case 'genre':
          // console.log(event.target.value);
          setFilter({...filter, genre: event.target.checked ? event.target.value : null});
          // console.log(filter.genre);
          break;   
        case 'decade':
          setFilter({...filter, decade: event.target.checked ? event.target.value : null});
          break;     
        default:
          console.log('Filter Dropdown error');
          break;
      }
    // }
  };

  return (
    <CheckBoxContainer>
      <StyledCheckbox
        id={`${filterType}-${value}`}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={handleFilterChange}
      />
      <Checkmark />
      <CheckboxLabel htmlFor={`${filterType}-${value}`}>{value}</CheckboxLabel>
    </CheckBoxContainer>
  );
}

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
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


const CheckboxLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-left: 12px;
  margin: auto 0px;
  color: white;
`;



export default FilterDropdown