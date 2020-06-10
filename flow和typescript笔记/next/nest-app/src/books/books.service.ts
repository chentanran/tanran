import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks() {
    return '就是这个家伙'
  }
}
