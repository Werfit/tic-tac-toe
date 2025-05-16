import styles from "./header.module.css";
import { Icon, IconNames } from "../../../../components/icon.component";
import { cn } from "../../../../shared/utilities/cn.utility";
import { useGame } from "../../context/game.context";

export const Header = () => {
  const { isOver, restartGame, undoMove } = useGame();

  return (
    <header className={styles.header}>
      <div>
        <h1>Tic Tac Toe</h1>

        <div className={styles["header__player"]}>
          You are playing as{" "}
          <span>
            <Icon
              name={IconNames.CROSS}
              className={styles["header__player-icon"]}
            />
          </span>
        </div>
      </div>

      <div className={styles["header__button-container"]}>
        <button
          type="button"
          className={cn(
            styles["header__button"],
            styles["header__button__restart"],
            isOver && styles["header__button__restart--over"]
          )}
          onClick={restartGame}
        >
          <Icon name={IconNames.RESTART} />
        </button>
        <button
          type="button"
          className={cn(
            styles["header__button"],
            styles["header__button__undo"]
          )}
          onClick={undoMove}
          disabled={isOver}
        >
          <Icon name={IconNames.UNDO} />
        </button>
      </div>
    </header>
  );
};
