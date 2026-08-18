import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  template: `
    <section class="newsletter">
      <div class="container newsletter-inner">
        <div>
          <p class="section-label">Stay connected</p>
          <h2>Receive publishing news and fresh releases.</h2>
        </div>

        <form
          class="newsletter-form"
          name="newsletter"
          method="POST"
          action="/"
          data-netlify="true"
          netlify
          (submit)="handleSubmit($event)"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            aria-label="Email address"
            required
          />
          <button type="submit" class="primary-button">Join newsletter</button>
        </form>

        @if (statusMessage) {
          <p class="form-status">{{ statusMessage }}</p>
        }
      </div>
    </section>
  `,
  styles: `
    .newsletter {
      background: linear-gradient(135deg, var(--forest-soft), #f8f4ee);
      border-top: 1px solid rgba(28, 58, 45, 0.08);
      border-bottom: 1px solid rgba(28, 58, 45, 0.08);
      padding: 3rem 0;
    }

    .newsletter-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .newsletter h2 {
      margin: 0;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
    }

    .newsletter-form {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .newsletter-form input {
      min-width: min(100%, 320px);
      min-height: 48px;
      padding: 0.9rem 1rem;
      border-radius: 999px;
      border: 1px solid rgba(28, 58, 45, 0.16);
      background: rgba(255, 255, 255, 0.6);
    }

    .form-status {
      margin: 1rem 0 0;
      color: var(--forest);
      font-weight: 600;
    }

    @media (max-width: 820px) {
      .newsletter-inner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `
})
export class NewsletterComponent {
  statusMessage = '';

  async handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      this.statusMessage = 'Thanks for joining — you’re on the list.';
      form.reset();
    } catch {
      this.statusMessage = 'Something went wrong. Please try again.';
    }
  }
}
