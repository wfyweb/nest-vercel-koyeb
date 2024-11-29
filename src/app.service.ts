import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! 
            <br> <br> <br> 
            <a href="https://github.com/nshen/nest-vercel-koyeb">https://github.com/nshen/nest-vercel-koyeb</a>`;
  }
}
