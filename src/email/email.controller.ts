import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { SendEmailDto } from './dtos/send-email.dto';

console.log('env: ', process.env.EMAIL_QUEUE);

@Controller('email')
export class EmailController {
  constructor(private readonly sendgridService: SendgridService) {}

  @EventPattern(process.env.EMAIL_QUEUE)
  async sendEmail(@Payload() data: SendEmailDto) {
    const mail = {
      to: data.emailAddress,
      subject: 'PDI Microservice',
      from: process.env.SENDER_ADDRESS,
      text: data.content,
    };
    return await this.sendgridService.send(mail);
  }
}
