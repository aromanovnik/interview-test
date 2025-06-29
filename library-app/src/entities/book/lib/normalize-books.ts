import { Book } from "../model/book.model";


// validation-rule.ts
export function validateBook(book: Book) {
    if (!book.title) throw new Error('Title is required');
}