import React from 'react'
import styled from "styled-components";

const FilterDropdown = ({ value, checked, onChange, filterType }) => {
  return (
    <CheckBoxContainer>
      <StyledCheckbox
        id={`${filterType}-${value}`}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
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