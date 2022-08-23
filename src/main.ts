import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8081;
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.RABBITMQ_HOST}`],
      queue: process.env.EMAIL_QUEUE,
      prefetchCount: Number(process.env.PARALLEL_PROCESSINGS),
    },
  });

  await app.startAllMicroservices();
  await app.listen(PORT, () => {
    logger.verbose(`Application has started on port ${PORT}`);
  });
}
bootstrap();
