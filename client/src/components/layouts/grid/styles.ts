import styled, { css } from 'styled-components';
import { GridProps } from '../../../interfaces/layouts';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  ${(props) =>
    props.columns &&
    css`
      grid-template-columns: repeat(${props.columns}, 1fr);
    `}

  ${(props) =>
    props.minColumnWidth &&
    css`
      grid-template-columns: repeat(
        auto-${props.autoFit ? 'fit' : 'fill'},
        minmax(${props.minColumnWidth}, 1fr)
      );
    `}
`;
