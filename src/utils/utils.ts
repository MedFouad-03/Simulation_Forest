import { CellState } from '../interfaces/interfaces';

export const getColor = (cellState: CellState): string => {
  switch (cellState) {
    case 1:
      return 'red';
    case 2:
      return 'gray';
    default:
      return 'green';
  }
};
