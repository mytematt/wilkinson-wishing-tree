import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page-header">
      <div class="container">
        <p class="section-label">Get in touch</p>
        <h1>Contact Wilkinson Wishing Tree</h1>
        <p>Questions about a title, speaking event, or publishing opportunity? We’d love to hear from you.</p>
      </div>
    </section>

    <section class="container contact-wrap">
      <div class="contact-card">
        <h2>Email</h2>
        <p>hello@wilkinsonwishingtree.com</p>
      </div>
      <div class="contact-card">
        <h2>Location</h2>
        <p>United Kingdom</p>
      </div>
      <div class="contact-card">
        <h2>Follow</h2>
        <p>@wilkinsonwishingtree</p>
      </div>
    </section>
  `,
  styles: `
    .contact-wrap {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      padding: 1rem 0 4rem;
    }

    .contact-card {
      background: white;
      border: 1px solid rgba(28, 58, 45, 0.08);
      border-radius: 1.2rem;
      padding: 1.5rem;
      box-shadow: 0 14px 25px var(--shadow);
    }

    .contact-card h2 {
      margin: 0 0 0.65rem;
      font-size: 1.3rem;
    }

    .contact-card p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    @media (max-width: 900px) {
      .contact-wrap {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class ContactComponent {}
