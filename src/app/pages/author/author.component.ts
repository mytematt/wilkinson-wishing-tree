import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: true,
  template: `
    <section class="page-header">
      <div class="container">
        <p class="section-label">About the author</p>
        <h1>Wilkinson Wishing Tree</h1>
        <p>
          A publishing house devoted to stories that invite quiet reflection, generous imagination,
          and meaningful connection.
        </p>
      </div>
    </section>

    <section class="container author-story">
      <div class="portrait"></div>
      <div class="story-copy">
        <h2>Rooted in thoughtful storytelling</h2>
        <p>
          Wilkinson Wishing Tree Publishing exists to champion books that nourish the imagination and
          speak to the heart. We are especially drawn to titles that offer warmth, perspective, and
          a sense of belonging.
        </p>
        <p>
          Our catalog celebrates authors who write with honesty, tenderness, and originality—stories
          that linger long after the final page.
        </p>
      </div>
    </section>
  `,
  styles: `
    .author-story {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 2rem;
      align-items: center;
      padding: 2rem 0 3rem;
    }

    .portrait {
      min-height: 430px;
      border-radius: 2rem;
      background: linear-gradient(135deg, var(--forest), #b39b67);
      box-shadow: 0 24px 36px rgba(28, 58, 45, 0.12);
    }

    .story-copy h2 {
      margin: 0 0 1rem;
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .story-copy p {
      color: var(--muted);
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    @media (max-width: 840px) {
      .author-story {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class AuthorComponent {}
