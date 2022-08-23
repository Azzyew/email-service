import { IsEmail, IsString } from 'class-validator';

export class SendEmailDto {
  @IsEmail()
  emailAddress: string;

  @IsString()
  content: string;
}
