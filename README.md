#### Found bugs & deficiencies

- [ ] It is possible to create a book while only specifying title
- [ ] GET with no author field present still returns all data
- [ ] GET with no args returns the data, but not in ascending order by title

#### TODO

- [x] Refactor Controller
- [ ] Module does not need refactoring
- [ ]
- [ ]

CONTROLLER

- I decided against destructuring this.db in Controller because it'll lead to the same amount of code (still has to be repeated, just a shorter var name) and I find it'd be a little easier to follow within the functions as it's more explicit.
- Logic refactor, as the original code could be more elegant.

# Node Technical Assessment

## Overview

Please complete this exercise which uses the [Nest](https://github.com/nestjs/nest) Framework.

The following application is feature complete, you do not need to add any additional features.

However the application is not perfect and needs refactoring and bug fixes. There are several things to fix, finding every issue is not required.

This is expected to take no more than 3 hours. Please do not exceed 3 hours.

If there isn't time to fix everything, you can simply point out what the issues are and how you would resolve it.

---

## Getting started

To install the dependencies run:
`yarn`

To start the development server run:
`yarn start`

To use watch mode run:
`yarn start:dev`

### Routes

- `GET /`
- `POST /create`

---

## Features

- Create a book with at least the fields: `title` and `author`.
- Find books by author field.

---

## Data definition

### Book

- title
  - string
  - minimum of 1 character
  - this field is required to create a new book
  - this field must be unique
- author
  - string
  - minimum of 2 characters
  - this field is required to create a new book

---

## Data examples

### Create Book

The following input json would create a book

```json
{
  "title": "A Short History of Nearly Everything",
  "author": "Bill Bryson"
}
```

### Fetching books

- return all books, sorted by title ascending, for all authors if no author is specified.
- return all books, sorted by title ascending, for a specific author.

The json data returned should at least have the following elements

```json
[
  {
    "title": "A Short History of Nearly Everything",
    "author": "Bill Bryson"
  }
]
```

---

## Submission

Choose one of the following

- provide a public repo
- zip all files and email
