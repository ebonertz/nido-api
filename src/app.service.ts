import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiDto } from './dtos/gemini.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Nido!';
  }

  async getGeminiResponse(body: GeminiDto): Promise<string> {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const user = body.user;
    const prompt = body.prompt;

    console.log(`Request made by ${user} with prompt: ${prompt}`);
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
}
