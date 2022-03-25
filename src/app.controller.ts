import { Controller, Get, Post, Body, Query, Req, BadRequestException } from '@nestjs/common';
@Controller()
export class AppController {
  private db = [
    {
      author: "Steven Hawking",
      title: "God Created the Integers"
    },
    {
      author: "Neil DeGrasse Tyson",
      title: "Welcome to the Universe"
    },
    {
      author: "Madeline L'Engle",
      title: "A Wrinkle in Time"
    },
    {
      author: "Jordan Ellenberg",
      title: "How Not To Be Wrong"
    },
    {
      author: "Josh Clark, Charles Bryant",
      title: "Stuff You Should Know"
    },
    {
      author: "Philip Zimbardo",
      title: "The Time Paradox"
    }
  ];

  @Get()
  async search(@Query() query?: string) {
    if (query) {
      return this.db.filter(entry => entry.author === query)
    }

    if (!query) {
      // Ascending order => return -1; Descending => 1; They're the same entries => return 0
      return this.db
        .sort((a, b) => {
          return (a.title < b.title) ? -1
            : (a.title > b.title) ? 1
            : 0;
        });
    }
  }

  // It currently DOES permit you to submit bogus data on the first post.
  @Post('create')
  create(@Body('author') author:string, @Body('title') title: string) {
    if (author.length >= 2 || 
        title.length >= 1 || 
        !this.db.some((entry) => entry.title === title)) {
      this.db.push({ author, title });
      return 'Data submitted successfully.'
    } else {
      throw new BadRequestException('Request is missing some required data.');
    }    
  }
}
