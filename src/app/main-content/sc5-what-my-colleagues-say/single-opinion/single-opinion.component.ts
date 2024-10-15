import { Component, Input } from '@angular/core';
import { OpinionInterface } from '../../../interface/opinion.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-single-opinion',
  standalone: true,
  imports: [],
  templateUrl: './single-opinion.component.html',
  styleUrls: ['./single-opinion.component.scss'],
})
export class SingleOpinionComponent {
  @Input() opinion: OpinionInterface = {
    name: '',
    text_de: '',
    text_en: '',
    occupation: '',
  };

  public translatedText: string = '';

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.updateTranslatedText();
    });
  }

  ngOnInit() {
    this.updateTranslatedText(); 
  }

  private updateTranslatedText() {
    const currentLang = this.translate.currentLang; 
    this.translatedText = currentLang === 'de' ? this.opinion.text_de : this.opinion.text_en;
  }
}
