import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../core/services/book.service';
import { Book } from '../../core/models/book.model';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  template: `
    @if (book) {
      <article class="book-detail container">
        <div class="book-detail__cover">
          <img [src]="book.coverImage" [alt]="book.title" />
        </div>
        <div class="book-detail__content">
          <p class="section-label">{{ book.category }}</p>
          <h1>{{ book.title }}</h1>
          <p class="author">by {{ book.author }}</p>
          <p class="description">{{ book.description }}</p>
          <div class="meta-row">
            <span>Published: {{ book.publishedYear }}</span>
            <span>Status: {{ book.status }}</span>
          </div>
          <div class="purchase-row">
            <span class="price">$ {{ book.price.toFixed(2) }}</span>
            <button class="primary-button" type="button">Add to cart</button>
          </div>
        </div>
      </article>
    } @else {
      <section class="container empty-state">
        <h2>Book not found.</h2>
      </section>
    }
  `,
  styles: `
    .book-detail {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 2rem;
      padding: 4rem 0 2rem;
      align-items: center;
    }

    .book-detail__cover img {
      width: 100%;
      max-width: 560px;
      border-radius: 1.5rem;
      box-shadow: 0 24px 36px rgba(28, 58, 45, 0.12);
      display: block;
      margin: 0 auto;
    }

    .book-detail__content h1 {
      margin: 0;
      font-size: clamp(2.2rem, 4vw, 3.8rem);
    }

    .author {
      margin-top: 0.8rem;
      color: var(--muted);
      font-size: 1.1rem;
    }

    .description {
      margin-top: 1rem;
      color: var(--muted);
      line-height: 1.75;
      font-size: 1.05rem;
    }

    .meta-row,
    .purchase-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1.3rem;
      flex-wrap: wrap;
      color: var(--forest);
      font-weight: 600;
    }

    .price {
      font-size: 1.6rem;
    }

    .empty-state {
      min-height: 300px;
      display: grid;
      place-items: center;
    }

    @media (max-width: 860px) {
      .book-detail {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.book = slug ? this.bookService.getBookBySlug(slug) : undefined;
  }
}
