import { Component, PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';

interface Usuarios {
  id: number;
  name: string;
  flag: string;
  email: string;
  psw: number;
  esAdmin: string;
  equipo: string;
}

const USUARIOS: Usuarios[] = [
  {
    id: 1,
    name: 'Daniel',
    flag: '/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png',
    email: 'danihipli@gmail.com',
    psw: 146989754,
    esAdmin: 'Yes',
    equipo: 'AcMilanessa'
  },
  {
    id: 2,
    name: 'Juan',
    flag: '/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png',
    email: 'juan@example.com',
    psw: 123456,
    esAdmin: 'No',
    equipo: 'BarcelonaFC'
  },
  
];

function search(text: string, pipe: PipeTransform): Usuarios[] {
  return USUARIOS.filter((usuario) => {
    const term = text.toLowerCase();
    return (
      usuario.name.toLowerCase().includes(term) ||
      pipe.transform(usuario.name).includes(term) ||
      pipe.transform(usuario.email).includes(term) ||
      pipe.transform(usuario.equipo).includes(term) 
    );
  });
}

@Component({
	selector: 'users-list',
  standalone: true,
	imports: [DecimalPipe, AsyncPipe, ReactiveFormsModule, NgbHighlight, CommonModule],
	templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
	providers: [DecimalPipe],
})

export class UserListComponent {
	users$: Observable<Usuarios[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.users$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}
}