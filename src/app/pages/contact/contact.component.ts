import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showSuccessModal = false;

  async onSubmit(event: SubmitEvent): Promise<void> {
    const form = event.target as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    event.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    const response = await fetch(form.action || '/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payload.toString()
    });

    if (!response.ok) {
      form.submit();
      return;
    }

    form.reset();
    this.showSuccessModal = true;
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }
}
