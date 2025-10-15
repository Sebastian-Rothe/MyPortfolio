import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sc6-contact-me',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterLink],
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
        'Content-Type': 'application/json',
      },
      responseType: 'text' as 'json'  
    },
  };
  

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.openPopup();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          // complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      this.openPopup();
      ngForm.resetForm();
    } else {
      this.setFormControlsTouched(ngForm);
    }
  }

  private setFormControlsTouched(ngForm: NgForm) {
    Object.keys(ngForm.controls).forEach(controlName => {
      ngForm.controls[controlName].markAsTouched();
    });
  }

  showPopup: boolean = false;
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
}
