import { Body, Controller, Post } from '@nestjs/common';
import { MakeMoveDTO } from './dto/make-move.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('/move')
  makeMove(@Body() data: MakeMoveDTO) {
    // here could be logic for saving a game to Redis for example; GameController could be converted to a Gateway to make this game playable by real people.
    return this.gameService.makeMove(data.field);
  }
}
