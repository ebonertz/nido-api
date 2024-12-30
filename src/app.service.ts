import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Nido!';
  }

  async getGeminiResponse(): Promise<string> {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt =
      'Give me a response with the current version of Gemini and I interesting fact about Raleigh, North Carolina.';

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
}
