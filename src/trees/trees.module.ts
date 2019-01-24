import { Module } from '@nestjs/common';
import { TreesController } from './controllers/trees.controller';
import { TreesService } from './services/trees.service';
import { CreateTreeService } from './services/create-tree.service';

@Module({
  controllers: [TreesController],
  providers: [TreesService, CreateTreeService]
})
export class TreesModule {}
