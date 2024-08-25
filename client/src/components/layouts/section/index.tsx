import React from 'react';
import { SectionProps } from '../../../interfaces/layouts';
import { StyledSection } from './styles';

const Section = ({ 
  padding = '0px', 
  backgroundColor = 'transparent', 
  direction = 'row', 
  alignment = 'horizontal',
  children 
}: SectionProps) => {

  return (
    <StyledSection 
      padding={padding} 
      backgroundColor={backgroundColor} 
      direction={direction}
      alignment={alignment}
    >
      {children}
    </StyledSection>);

};

export default Section;

