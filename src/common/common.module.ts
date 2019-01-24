import { Module, Global } from '@nestjs/common';
import { HelpersService } from './services/helpers.service';

@Global()
@Module({
  providers: [HelpersService],
  exports: [HelpersService],
})
export class CommonModule {}
