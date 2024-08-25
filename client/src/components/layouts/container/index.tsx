import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  display?: string | null;
  maxWidth?: string;
  padding?: string;
  margin?: string;
  children: React.ReactNode;

}

const Container = ({ 
  display = null,
  maxWidth = null, 
  padding = '0px 20px 0px 20px',
  margin = '0 auto', 
  children 
}: ContainerProps) => {

  return (    
    <StyledContainer 
      display={ display }
      maxWidth={ maxWidth } 
      padding={ padding }
      margin={ margin }
    >     
      { children }
    </StyledContainer>
  );

};

export default Container;

const StyledContainer = styled.div<ContainerProps>`
  ${ (props) => props.display && `display: ${ props.display };` }
  max-width: ${ (props) => props.maxWidth };
  padding: ${ (props) => props.padding };
  margin: ${ (props) => props.margin };
`;
