import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'btn-money_resume',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './btn-desplegable-money-resume.component.html',
  styleUrl: './btn-desplegable-money-resume.component.scss',
  host: { class: 'd-block' },
})
export class BtnDesplegableMoneyResumeComponent {
  money_bank ="2.550.001";
}