import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Book } from '../../../core/models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (book) {
      <article class="book-card">
        <img [src]="book.coverImage" [alt]="book.title" />
        <div class="book-card__content">
          <span class="book-category">{{ book.category }}</span>
          <h3>{{ book.title }}</h3>
          <p class="author">{{ book.author }}</p>
          <p class="description">{{ book.description }}</p>
          <div class="book-meta">
            <span>{{ book.publishedYear }}</span>
            <span>{{ book.status }}</span>
          </div>
          <div class="book-actions">
            <span class="price">$ {{ book.price.toFixed(2) }}</span>
            <a [routerLink]="['/books', book.slug]" class="secondary-button">View details</a>
          </div>
        </div>
      </article>
    }
  `,
  styles: `
    .book-card {
      background: white;
      border: 1px solid rgba(28, 58, 45, 0.08);
      border-radius: 1.2rem;
      overflow: hidden;
      box-shadow: 0 18px 34px var(--shadow);
    }

    .book-card img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      display: block;
      background: var(--forest-soft);
    }

    .book-card__content {
      padding: 1.2rem;
    }

    .book-category {
      display: inline-block;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--forest);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .book-card h3 {
      margin: 0;
      font-size: 1.4rem;
    }

    .author {
      color: var(--muted);
      margin-top: 0.4rem;
    }

    .description {
      color: var(--muted);
      margin-top: 0.75rem;
      line-height: 1.7;
    }

    .book-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      color: var(--muted);
      font-size: 0.85rem;
    }

    .book-actions {
      margin-top: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .price {
      font-weight: 800;
      color: var(--forest);
    }
  `
})
export class BookCardComponent {
  @Input() book!: Book;
}
