import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;
  submitting = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    this.submitting = true;
    this.http.post<any>('http://localhost:8000/api/inquiries', this.formData)
      .subscribe(
        response => {
          console.log('Submission successful:', response);
          this.submitted = true;
          this.submitting = false;
        },
        error => {
          console.error('Submission error:', error);
          this.submitting = false;
        }
      );
  }

}
