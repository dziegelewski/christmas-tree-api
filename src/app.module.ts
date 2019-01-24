import { Module } from '@nestjs/common';
import { TreesModule } from './trees/trees.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TreesModule, CommonModule],
})
export class AppModule {}
