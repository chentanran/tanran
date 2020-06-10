import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService){
  }

  @Get('/js')
  findBook() {
    const res = this.booksService.getBooks()
    return res
  }
}
