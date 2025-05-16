import { createContext, useContext, useState } from "react";
import type { FieldCellState, Player } from "../types/game.types";
import { useMakeMove } from "../hooks/use-make-move.hook";
import { useField } from "../hooks/use-field.hook";
import type { GameContextState, GameProviderProps } from "./game.types";

const GameContext = createContext<GameContextState | null>(null);

const PLAYER_MOVE: Player = "x";

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [{ field, fieldRef }, makePlayerMove, { undo, reset }] = useField();
  const [isOver, setIsOver] = useState(false);
  const [winnerCoordinates, setWinnerCoordinates] = useState<
    [number, number] | null
  >(null);
  const { isPending, makeMoveRequest, abortRequest } = useMakeMove();

  const restartGame = () => {
    reset();
    setIsOver(false);
    setWinnerCoordinates(null);
    abortRequest();
  };

  const makeMove = async ({ position, isTaken }: FieldCellState) => {
    if (isPending || isTaken) {
      return;
    }

    makePlayerMove(position, PLAYER_MOVE);

    try {
      const { isOver, move, winner } = await makeMoveRequest(fieldRef.current);
      setIsOver(isOver);

      if (move) {
        makePlayerMove(move.position, move.value);
      }

      if (winner) {
        setWinnerCoordinates(winner.coordinates);
      }
    } catch (error) {
      const error_ = error as Error;
      console.error(error_);
    }
  };

  const undoMove = () => {
    undo();
  };

  return (
    <GameContext.Provider
      value={{
        makeMove,
        field,
        isOver,
        winnerCoordinates,
        restartGame,
        undoMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
