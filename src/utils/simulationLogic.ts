import { probBrulee, probPropagation } from '../constants/constants';
import { Grid } from '../interfaces/interfaces';

export const createInitialGrid = (L: number): Grid => {
  const newGrid: Grid = Array(L)
    .fill(null)
    .map(() => Array(L).fill(0));
  newGrid[Math.floor(L / 2)][Math.floor(L / 2)] = 1; // Initialiser le feu
  return newGrid;
};

export const updateGrid = (grid: Grid, L: number): Grid => {
  const newGrid: Grid = grid.map((row) => [...row]); // Création d'une copie superficielle de la grille
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < L; j++) {
      if (grid[i][j] === 1) {
        if (Math.random() < probBrulee) {
          newGrid[i][j] = 2; // Devenir brûlée
        }
        [
          [1, 0],
          [0, 1],
          [-1, 0],
          [0, -1],
        ].forEach(([di, dj]) => {
          const ni = i + di,
            nj = j + dj;
          if (ni >= 0 && ni < L && nj >= 0 && nj < L && grid[ni][nj] === 0) {
            if (Math.random() < probPropagation) {
              newGrid[ni][nj] = 1; // Propagation du feu
            }
          }
        });
      }
    }
  }
  return newGrid;
};
