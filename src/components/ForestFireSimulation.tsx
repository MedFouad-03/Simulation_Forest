import React, { useState, useEffect, useMemo } from 'react';
import GridComponent from './GridComponent';
import { createInitialGrid, updateGrid } from '../utils/simulationLogic';
import { L } from '../constants/constants';

const ForestFireSimulation: React.FC = () => {
  const initialGrid = useMemo(() => createInitialGrid(L), []);

  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((currentGrid) => updateGrid(currentGrid, L));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '100vw',
      }}
    >
      <h1>
        <span role='img' aria-label='fire'>
          🔥
        </span>
        Simulation d'incendie de forêt
        <span role='img' aria-label='fire'>
          🔥
        </span>
      </h1>
      <GridComponent grid={grid} />
    </div>
  );
};

export default ForestFireSimulation;
