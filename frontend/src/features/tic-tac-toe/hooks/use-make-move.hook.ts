import { useCallback, useRef, useState } from "react";

import type { GameField, Player } from "../types/game.types";
import { environment } from "../../../shared/environment";

type MoveResponse = {
  move: {
    position: number;
    value: Player;
  } | null;
  winner: {
    player: Player;
    coordinates: [number, number];
  } | null;
  isOver: boolean;
};

export const useMakeMove = () => {
  const [isPending, setIsPending] = useState(false);
  const abortController = useRef<AbortController | null>(null);

  const makeMoveRequest = useCallback(async (field: GameField) => {
    setIsPending(true);

    try {
      abortController.current?.abort();
      abortController.current = new AbortController();

      const response = await fetch(`${environment.gameApi}/game/move`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ field }),
        signal: abortController.current.signal,
      });

      if (response.ok) {
        const payload = await response.json();
        setIsPending(false);
        return payload as MoveResponse;
      }

      const payload = await response.json();
      setIsPending(false);
      throw new Error(payload.message);
    } catch (error) {
      const error_ = error as Error;
      setIsPending(false);
      throw error_;
    }
  }, []);

  const abortRequest = () => {
    abortController.current?.abort();
    abortController.current = null;
  };

  return {
    isPending,
    makeMoveRequest,
    abortRequest,
  } as const;
};
