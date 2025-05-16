import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { GameField, Player } from './game.types';
import { randomNumber } from 'src/shared/utilities/random.utility';

@Injectable()
export class GameService {
  private readonly logger = new Logger(GameService.name);
  private readonly computerPlayer: Player = 'o';

  makeMove(field: GameField): {
    winner: {
      player: Player;
      coordinates: [number, number];
    } | null;
    move: {
      position: number;
      value: Player;
    } | null;
    isOver: boolean;
  } {
    this.logger.log('GameService::makeMove');

    const winner = this.hasWinner(field);

    if (winner) {
      return {
        winner,
        move: null,
        isOver: true,
      };
    }

    const isGameFinished = !this.hasAvailableMoves(field);

    if (isGameFinished) {
      return {
        winner,
        move: null,
        isOver: true,
      };
    }

    const moveIndex = this.generateUniqueMoveIndex(field);

    if (moveIndex === null) {
      throw new InternalServerErrorException(
        'Failed to find a spot to make a move',
      );
    }

    field[moveIndex] = this.computerPlayer;

    const newWinner = this.hasWinner(field);

    return {
      move: {
        position: moveIndex,
        value: this.computerPlayer,
      },
      winner: newWinner,
      isOver: !this.hasAvailableMoves(field) || newWinner !== null,
    };
  }

  private hasWinner(field: GameField): {
    player: Player;
    coordinates: [number, number];
  } | null {
    for (let y = 0; y < 3; y++) {
      const horizontalPosition = y * 3;

      const hasHorizontalMatch =
        field[horizontalPosition] === field[horizontalPosition + 1] &&
        field[horizontalPosition] === field[horizontalPosition + 2];

      if (hasHorizontalMatch && field[horizontalPosition] !== null) {
        return {
          player: field[horizontalPosition],
          coordinates: [horizontalPosition, horizontalPosition + 2],
        };
      }

      const hasVerticalMatch =
        field[y] === field[y + 3] && field[y] == field[y + 6];

      const element = field[y];
      if (hasVerticalMatch && element !== null) {
        return {
          player: element,
          coordinates: [y, y + 6],
        };
      }
    }

    const centerCell = field[4];
    if (centerCell === null) {
      return null;
    }

    const hasDiagonalMatch = field[0] === centerCell && centerCell === field[8];
    const hasBackDiagonalMatch =
      field[2] === centerCell && centerCell === field[6];

    if (hasDiagonalMatch) {
      return {
        player: centerCell,
        coordinates: [0, 8],
      };
    }

    if (hasBackDiagonalMatch) {
      return {
        player: centerCell,
        coordinates: [2, 6],
      };
    }

    return null;
  }

  private generateUniqueMoveIndex(
    field: GameField,
    used: number[] = [],
  ): number | null {
    if (used.length === field.length) {
      return null;
    }

    const moveIndex = randomNumber(0, 8);

    if (used.includes(moveIndex)) {
      // dangerous, can cause infinite recursion
      return this.generateUniqueMoveIndex(field, used);
    }

    // cell is taken, making an attempt to come up with a different spot
    if (field[moveIndex] !== null) {
      return this.generateUniqueMoveIndex(field, [...used, moveIndex]);
    }

    return moveIndex;
  }

  private hasAvailableMoves(field: GameField) {
    return field.filter((cell) => cell === null).length > 0;
  }
}
