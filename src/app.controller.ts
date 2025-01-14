import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GeminiDto } from './dtos/gemini.dto';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/gemini')
  async getGeminiResponse(@Body() body: GeminiDto): Promise<string> {
    return this.appService.getGeminiResponse(body);
  }
}
