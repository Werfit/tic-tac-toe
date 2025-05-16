import type { FieldCellState, GameField } from "../types/game.types";

export type GameContextState = {
  field: GameField;
  isOver: boolean;
  winnerCoordinates: [number, number] | null;
  makeMove: (data: FieldCellState) => Promise<void>;
  restartGame: () => void;
  undoMove: () => void;
};

export type GameProviderProps = {
  children: React.ReactNode;
};
