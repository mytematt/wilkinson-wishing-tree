import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  template: `
    <section class="container thank-you">
      <div class="thank-you-card">
        <p class="section-label">Thank you</p>
        <h1>Your message has been received.</h1>
        <p>We’ll be in touch soon with the next steps.</p>
      </div>
    </section>
  `,
  styles: `
    .thank-you {
      padding: 5rem 0;
    }

    .thank-you-card {
      max-width: 740px;
      margin: 0 auto;
      background: linear-gradient(135deg, var(--forest-soft), white);
      border: 1px solid rgba(28, 58, 45, 0.08);
      border-radius: 1.5rem;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 20px 30px var(--shadow);
    }

    .thank-you-card h1 {
      margin: 0;
      font-size: clamp(2.2rem, 4vw, 4rem);
    }

    .thank-you-card p:last-child {
      color: var(--muted);
      margin-top: 1rem;
      font-size: 1.05rem;
    }
  `
})
export class ThankYouComponent {}
