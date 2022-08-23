import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SendgridService } from './sendgrid.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [SendgridService, ConfigService],
  exports: [SendgridService],
})
export class SendgridModule {}
