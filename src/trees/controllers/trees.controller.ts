import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { TreesService } from '../services/trees.service';
import { TreeModel } from '../models/TreeModel';

@Controller('trees')
export class TreesController {
  constructor(
    private treesService: TreesService,
  ) {}

  @Get()
  getTrees(@Query('page', new ParseIntPipe()) page: number = null) {
    if (page) {
      return this.treesService.getAllFromPage(page);
    } else {
      return this.treesService.getAll();
    }
  }

  @Get('/:id')
  getParticularTree(@Param('id', new ParseIntPipe()) id: number) {
    return this.treesService.findOneById(id);
  }
}
