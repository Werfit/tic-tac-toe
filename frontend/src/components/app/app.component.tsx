import styles from "./app.module.css";
import { Field } from "../../features/tic-tac-toe/components/field/field.component";
import { Header } from "../../features/tic-tac-toe/components/header/header.component";
import { GameProvider } from "../../features/tic-tac-toe/context/game.context";

export const App = () => {
  return (
    <main className={styles.app}>
      <GameProvider>
        <Header />
        <Field />
      </GameProvider>
    </main>
  );
};
