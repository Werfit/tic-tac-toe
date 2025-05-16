export type Player = 'x' | 'o';

type GameMove = Player | null;

export type GameField = [
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
  GameMove,
];
