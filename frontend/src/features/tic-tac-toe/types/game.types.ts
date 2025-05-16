export type Player = "x" | "o";

export type GameMove = Player | null;

export type GameField = [
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove
];

export type FieldCellState = {
  position: number;
  isTaken: boolean;
};
