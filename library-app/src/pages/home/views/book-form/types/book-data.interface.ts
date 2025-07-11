import { BookItem } from '@pages/home/components/book-item/types';

export type BookData = Omit<BookItem, 'id'>;
