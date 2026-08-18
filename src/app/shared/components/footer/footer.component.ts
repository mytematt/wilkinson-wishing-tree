import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <h3>Wilkinson Wishing Tree</h3>
          <p>Publishing stories rooted in hope, heart, and belonging.</p>
        </div>

        <div class="footer-links">
          <a routerLink="/books">Books</a>
          <a routerLink="/about">About</a>
          <a routerLink="/contact">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      background: var(--forest);
      color: white;
      margin-top: 4rem;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      padding: 2rem 0;
      align-items: center;
    }

    .site-footer h3 {
      margin: 0 0 0.5rem;
    }

    .site-footer p {
      margin: 0;
      color: rgba(255, 255, 255, 0.8);
    }

    .footer-links {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
    }

    .footer-links a {
      color: white;
      text-decoration: none;
      opacity: 0.85;
    }

    @media (max-width: 640px) {
      .footer-inner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `
})
export class FooterComponent {}
