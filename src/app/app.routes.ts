import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { AuthorComponent } from './pages/author/author.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BooksComponent } from './pages/books/books.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:slug', component: BookDetailComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: '' }
];
