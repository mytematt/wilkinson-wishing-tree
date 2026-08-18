import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page-header">
      <div class="container">
        <p class="section-label">Our mission</p>
        <h1>Publishing stories that stay with you.</h1>
        <p>
          Wilkinson Wishing Tree Publishing celebrates books that are thoughtful, memorable, and full
          of life.
        </p>
      </div>
    </section>

    <section class="container feature-grid">
      <div class="feature-card">
        <h3>Curated</h3>
        <p>We select titles that balance literary value with emotional resonance.</p>
      </div>
      <div class="feature-card">
        <h3>Human</h3>
        <p>We believe storytelling is a deeply human way to connect and reflect.</p>
      </div>
      <div class="feature-card">
        <h3>Intentional</h3>
        <p>Every title is chosen for its voice, craft, and lasting impression.</p>
      </div>
    </section>
  `,
  styles: `
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      padding: 1rem 0 4rem;
    }

    .feature-card {
      background: white;
      border: 1px solid rgba(28, 58, 45, 0.08);
      border-radius: 1.3rem;
      padding: 1.5rem;
      box-shadow: 0 14px 25px var(--shadow);
    }

    .feature-card h3 {
      margin: 0 0 0.8rem;
      font-size: 1.4rem;
    }

    .feature-card p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
    }

    @media (max-width: 900px) {
      .feature-grid {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class AboutComponent {}
