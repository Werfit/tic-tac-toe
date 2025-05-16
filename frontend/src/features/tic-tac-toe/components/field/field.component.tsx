import { Icon, IconNames } from "../../../../components/icon.component";
import styles from "./field.module.css";
import type { FieldCellState, GameMove } from "../../types/game.types";

import { cn } from "../../../../shared/utilities/cn.utility";

import { WinnerLine } from "../winner-line/winner-line.component";
import { useGame } from "../../context/game.context";

type FieldCellProps = {
  value: GameMove;
  onClick: (data: FieldCellState) => void;
  position: number;
};

const FieldCell: React.FC<FieldCellProps> = ({ value, onClick, position }) => (
  <div
    className={styles.field__cell}
    role="button"
    onClick={() => onClick({ position, isTaken: value !== null })}
  >
    {value !== null && (
      <Icon
        name={value === "x" ? IconNames.CROSS : IconNames.CIRCLE}
        className={styles["field__cell-icon"]}
      />
    )}
  </div>
);

export const Field = () => {
  const { field, isOver, makeMove, winnerCoordinates } = useGame();

  return (
    <div className={styles["field-wrapper"]}>
      <div className={cn(styles.field, isOver && styles["field--over"])}>
        {field.map((move, index) => (
          <FieldCell
            key={index}
            value={move}
            position={index}
            onClick={makeMove}
          />
        ))}
      </div>
      {winnerCoordinates && (
        <WinnerLine winnerCoordinates={winnerCoordinates} />
      )}
    </div>
  );
};
