import { IsString } from 'class-validator';

export class GeminiDto {
  @IsString()
  user: string;

  @IsString()
  prompt: string;
}
