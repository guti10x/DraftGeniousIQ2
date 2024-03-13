import { Component, PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';


interface Users {
    id: number;
    name: string;
    flag: string;
    email: string;
    psw: string;
    esAdmin: string;
    equipo: string;
  }
  const COUNTRIES: Users[] = [
    {
      id: 1,
      name: 'Daniel',
      flag: '/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png',
      email: 'danihipli@gmail.com',
      psw: '146989754',
      esAdmin: 'Yes',
      equipo: 'AcMilanessa'
    },
    {
      id: 2,
      name: 'Borja',
      flag: '/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png',
      email: 'admin@example.com',
      psw: 'adminAdmin12345',
      esAdmin: 'No',
      equipo: 'AdminFC'
    },
    
    {
      id: 2,
      name: 'Andrés',
      flag: '/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png',
      email: 'parraes@gmail.com',
      psw: 'andre123',
      esAdmin: 'No',
      equipo: 'BFC'
    },
  ];

function search(text: string, pipe: PipeTransform): Users[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term)
		);
	});
}

@Component({
	selector: 'users-list',
  standalone: true,
	imports: [DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight],
	templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
	providers: [DecimalPipe],
})
export class UserListComponent {
	users$: Observable<Users[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.users$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}
}