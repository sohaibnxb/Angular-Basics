import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: "Clean Code",
        author: "John Smith",
        price: 250
      },
      {
        name: "Simple Code",
        author: "Anu jeny",
        price: 1050
      },
      {
        name: "JS Code",
        author: "Alon Mushk",
        price: 820
      },
      {
        name: "This in JS",
        author: "Shon Donny",
        price: 560
      }

    ]
  }
}
