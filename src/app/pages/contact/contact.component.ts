import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  showSuccessModal = false;
  submissionError = false;

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => payload.append(key, String(value)));

    this.submissionError = false;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });

      if (!response.ok) {
        this.submissionError = true;
        return;
      }

      form.reset();
      this.showSuccessModal = true;
    } catch {
      this.submissionError = true;
    } finally {
      this.changeDetectorRef.markForCheck();
    }
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }
}
