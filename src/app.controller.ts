import { Controller, Get, Post, Body, Query } from '@nestjs/common';
@Controller()
export class AppController {
  private db = [];

  @Get()
  find(@Query('search') input?) {
    if (!input) {
      // Ascending order => return 1; Descending => -1; They're the same entries => return 0
      return this.db.sort((a, b) => {
        return (a.title < b.title) ? 1 
             : (a.title > b.title) ? -1
             : 0;
      });
    }

    return this.db
      .filter((x) => x.author === input)
      .sort((a, b) => {
        return (a.title < b.title) ? 1 
             : (a.title > b.title) ? -1
             : 0;
      });
  }

  @Post('create')
  create(@Body() input) {
    // More elegant approach. Logic refactor. Only return if true and make it single-line return
    // don't allow duplicates
    if (!this.db.some((x) => x.title === input.title)) this.db.push(input);
  }
}
