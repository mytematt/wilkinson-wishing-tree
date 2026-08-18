import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { books } from '../../data/books';
import { BookCardComponent } from '../../shared/components/book-card/book-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly books = books;
}
