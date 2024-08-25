import styled from 'styled-components';
import { SectionProps } from '../../../interfaces/layouts';

export const StyledSection = styled.section<SectionProps>`
  display: flex;
  ${(props) => props.alignment === 'horizontal' ? 'width: 100%;' : 'height: 100%;'}
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
`;