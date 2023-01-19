import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Book from '../../types/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor(private cartService: CartService) { }
  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false;
  addToCart() {
    // this.bookEmitter.emit(this.book);
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
