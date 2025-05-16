import { ArrayMinSize, IsArray } from 'class-validator';
import { GameField } from '../game.types';
import { IsGameMove } from 'src/shared/decorators/validation/game-move.decorator';

export class MakeMoveDTO {
  @IsArray()
  @ArrayMinSize(9)
  @IsGameMove({ each: true })
  field: GameField;
}
