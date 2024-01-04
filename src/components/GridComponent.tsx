import React from 'react';
import { getColor } from '../utils/utils';
import { L } from '../constants/constants';
import { Grid } from '../interfaces/interfaces';

const GridComponent: React.FC<{ grid: Grid }> = ({ grid }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${L}, 10px)` }}>
    {grid.map((row, i) =>
      row.map((cell, j) => (
        <div
          key={`${i}-${j}`}
          style={{ width: 10, height: 10, backgroundColor: getColor(cell) }}
        />
      ))
    )}
  </div>
);

export default GridComponent;
