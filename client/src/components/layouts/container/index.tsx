import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
  padding?: string;
  children: React.ReactNode;
}

const Container = ({ maxWidth = '1200px', padding = '20px', children }: ContainerProps) => {
  return <StyledContainer maxWidth={maxWidth} padding={padding}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div<ContainerProps>`
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  margin: 0 auto;
`;
