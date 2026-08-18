import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a routerLink="/" class="brand" aria-label="Wilkinson Wishing Tree home">
          <span class="brand-mark">W</span>
          <span>Wilkinson Wishing Tree</span>
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/books" routerLinkActive="active">Books</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/author" routerLinkActive="active">Author</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

        <a routerLink="/books" class="primary-button header-cta">Browse books</a>
      </div>
    </header>
  `,
  styles: `
    .site-header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(247, 243, 238, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(28, 58, 45, 0.08);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 78px;
      gap: 1.5rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: var(--forest);
      font-weight: 800;
      letter-spacing: 0.02em;
      font-size: 1.02rem;
    }

    .brand-mark {
      display: inline-grid;
      place-items: center;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      background: var(--forest);
      color: white;
      font-family: Georgia, serif;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      flex-wrap: wrap;
    }

    .main-nav a {
      text-decoration: none;
      color: var(--muted);
      font-weight: 600;
      padding: 0.35rem 0.1rem;
      border-bottom: 2px solid transparent;
    }

    .main-nav a.active {
      color: var(--forest);
      border-color: var(--gold);
    }

    .header-cta {
      font-size: 0.9rem;
      padding: 0.75rem 1.1rem;
    }

    @media (max-width: 820px) {
      .header-inner {
        flex-wrap: wrap;
        justify-content: center;
        padding: 1rem 0;
      }

      .main-nav {
        justify-content: center;
      }
    }
  `
})
export class HeaderComponent {}
