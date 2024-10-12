import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';

@Component({
  selector: 'app-sc6-contact-me',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './sc6-contact-me.component.html',
  styleUrl: './sc6-contact-me.component.scss',
})
export class Sc6ContactMeComponent {
  translate = inject(TranslationService);
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkboxState = false;
  mailTest = false;

  post = {
    endPoint: 'https://sebastian-rothe.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          }
        });
    }  else {
      this.setFormControlsTouched(ngForm);
    }
  }

  private setFormControlsTouched(ngForm: NgForm) {
    Object.keys(ngForm.controls).forEach(controlName => {
      ngForm.controls[controlName].markAsTouched();
    });
  }
}
