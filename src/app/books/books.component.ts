import { Component } from '@angular/core';
import Book from '../types/book';
import { BooksService } from "./books.service"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private bookService: BooksService) { }

  books: Book[] = []

  cart: Book[] = []
  ngOnInit() { this.books = this.bookService.getBooks() }
  // name = "Clean  Code"
  // author = "Sohaib Ahmad"
  isShowing = false;


  addToCarts(cart: Book) {
  }
  
}
