import { Component } from '@angular/core';

import { books } from '../../data/books';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent],
  template: `
    <section class="page-header">
      <div class="container">
        <p class="section-label">Our catalog</p>
        <h1>Books by Wilkinson Wishing Tree</h1>
        <p>Discover beautifully written books chosen to delight, comfort, and inspire readers.</p>
      </div>
    </section>

    <section class="container books-wrap">
      <div class="book-grid">
        @for (book of books; track book.id) {
          <app-book-card [book]="book" />
        }
      </div>
    </section>
  `,
  styles: `
    .books-wrap {
      padding-bottom: 3rem;
    }

    .book-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    @media (max-width: 900px) {
      .book-grid {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class BooksComponent {
  protected readonly books = books;
}
