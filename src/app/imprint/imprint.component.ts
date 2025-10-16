import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../services/translate.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  translate = inject(TranslationService);

  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }
}
