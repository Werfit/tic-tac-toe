import { useMemo } from "react";
import styles from "./winner-line.module.css";

interface WinnerLineProps {
  winnerCoordinates: [number, number];
}

export const WinnerLine = ({ winnerCoordinates }: WinnerLineProps) => {
  const linePath = useMemo(() => {
    if (!winnerCoordinates) return "";

    const [start, end] = winnerCoordinates;
    const cellSize = 100; // Assuming 100% width/height for the grid
    const cellWidth = cellSize / 3;
    const cellHeight = cellSize / 3;
    const extension = 16; // 1rem extension in viewBox units

    // Calculate start and end points
    const startRow = Math.floor(start / 3);
    const startCol = start % 3;
    const endRow = Math.floor(end / 3);
    const endCol = end % 3;

    // Calculate center points of cells
    const startX = startCol * cellWidth + cellWidth / 2;
    const startY = startRow * cellHeight + cellHeight / 2;
    const endX = endCol * cellWidth + cellWidth / 2;
    const endY = endRow * cellHeight + cellHeight / 2;

    // Calculate the angle of the line
    const angle = Math.atan2(endY - startY, endX - startX);

    // Calculate extended points
    const extendedStartX = startX - Math.cos(angle) * extension;
    const extendedStartY = startY - Math.sin(angle) * extension;
    const extendedEndX = endX + Math.cos(angle) * extension;
    const extendedEndY = endY + Math.sin(angle) * extension;

    return `M ${extendedStartX} ${extendedStartY} L ${extendedEndX} ${extendedEndY}`;
  }, [winnerCoordinates]);

  return (
    <svg
      className={styles.winnerLine}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={linePath}
        className={styles.line}
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};
