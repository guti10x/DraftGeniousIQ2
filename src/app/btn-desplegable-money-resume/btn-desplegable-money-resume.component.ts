import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'btn-money_resume',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './btn-desplegable-money-resume.component.html',
  styleUrl: './btn-desplegable-money-resume.component.scss',
  host: { class: 'd-block' },
})

export class BtnDesplegableMoneyResumeComponent {
  money_bank ="2.550.001";
  transacciones: string[] = ['trans1 €', 'trans2 €', 'trans3 €', 'trans4 €', 'trans5 €', 'trans5 €']
}