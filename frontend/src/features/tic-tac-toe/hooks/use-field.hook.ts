import { useRef, useState } from "react";
import type { GameField, Player } from "../types/game.types";

type FieldMoment =
  | {
      type: "field";
      value: GameField;
      oldValue: GameField | null;
    }
  | {
      type: "move";
      value: Player;
      oldValue: Player | null;
      position: number;
    };

export const useField = () => {
  const fieldRef = useRef<GameField>(Array(9).fill(null) as GameField);
  const [field, setField] = useState<GameField>(fieldRef.current);
  const moments = useRef<FieldMoment[]>([
    {
      type: "field",
      value: field,
      oldValue: null,
    },
  ]);

  const makePlayerMove = (position: number, value: Player) => {
    moments.current.push({
      type: "move",
      value,
      oldValue: field[position],
      position,
    });
    fieldRef.current[position] = value;
    setField(() => [...fieldRef.current]);
  };

  const undo = () => {
    const lastMoment = moments.current.pop();

    if (lastMoment?.type === "move") {
      fieldRef.current[lastMoment.position] = lastMoment.oldValue;
      console.log(fieldRef.current);
      setField(() => [...fieldRef.current]);
      return;
    }

    if (lastMoment?.type === "field") {
      fieldRef.current = lastMoment.value;
      setField(() => [...fieldRef.current]);
      return;
    }
  };

  const reset = () => {
    fieldRef.current = Array(9).fill(null) as GameField;
    setField(() => fieldRef.current);
    moments.current = [
      {
        type: "field",
        value: field,
        oldValue: null,
      },
    ];
  };

  return [{ field, fieldRef }, makePlayerMove, { undo, reset }] as const;
};
