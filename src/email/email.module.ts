import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Module({
  imports: [SendgridService],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
