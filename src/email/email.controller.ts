import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('email')
export class EmailController {
  constructor(private readonly sendgridService: SendgridService) {}

  @Post('send')
  async sendEmail(@Query('email') email) {
    const mail = {
      to: email.emailAddress,
      subject: 'PDI Microservices',
      from: 'laisadnevescosta@gmail.com',
      content: email.content,
    };

    return await this.sendgridService.send(mail);
  }
}
