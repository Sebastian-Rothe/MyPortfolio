import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translate.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  translate = inject(TranslationService);

  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }
}
