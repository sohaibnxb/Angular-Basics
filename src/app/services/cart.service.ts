import { Injectable } from '@angular/core';
import Book from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Array<Book> = [];

  add(book: Book) {
    console.log("cart service add", this.cart)
    this.cart.push(book)
  }

  get() {
    console.log("cart service get", this.cart)
    return this.cart;
  }

  remove(book: Book) {
    console.log("cart service remove", this.cart)
    
    this.cart = this.cart.filter(b => b != book)
  }
}
