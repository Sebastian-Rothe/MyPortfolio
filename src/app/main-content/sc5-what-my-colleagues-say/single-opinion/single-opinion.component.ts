import { Component, Input } from '@angular/core';
import { OpinionInterface } from '../../../interface/opinion.interface';
@Component({
  selector: 'app-single-opinion',
  standalone: true,
  imports: [],
  templateUrl: './single-opinion.component.html',
  styleUrl: './single-opinion.component.scss',
})
export class SingleOpinionComponent {
  @Input() opinion: OpinionInterface = {
    name: '',
    text: '',
  };
}
