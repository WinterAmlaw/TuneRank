import React from 'react';
import { GridContainer } from './styles';
import { GridProps } from '../../../interfaces/layouts';

const Grid = ({
  columns,
  gap = '20px',
  minColumnWidth,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  autoFit = true,
  children,
}: GridProps) => {
  return (
    <GridContainer
      columns={columns}
      gap={gap}
      minColumnWidth={minColumnWidth}
      justifyContent={justifyContent}
      alignItems={alignItems}
      autoFit={autoFit}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;

