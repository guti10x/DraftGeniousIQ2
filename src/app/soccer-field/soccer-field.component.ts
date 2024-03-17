import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MatDialog} from '@angular/material/dialog';
//import{MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

type formacionTactica = '4-4-2' | '4-5-1' | '4-3-3' | '3-5-2' | '3-4-3' | '5-4-1' | '5-3-2' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' | '3-3-3-1' | '3-4-2-1' | '3-4-1-2' | '3-5-1-1' | '3-5-2' | '3-4-3' ;

interface PlayerDetails {
  name: string;
  number: number;
  position: string;
  fieldPosition?: { x: number; y: number };
  image?:string;
}

interface Player {
  name: string;
  number: number;
  position: string;
  fieldPosition: { x: number; y: number };
  image:string;
}

//constructor(private dialog: MatDialog) {}

@Component({
  selector: 'soccer-field',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './soccer-field.component.html',
  styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent {
  players: PlayerDetails[] = [
    { name: 'Cristiano Ronaldo', number: 7, position: 'Delantero', image:"../../assets/players/pedri.png" },
    { name: 'Lionel Messi', number: 10, position: 'Delantero', image:"../../assets/players/pedri.png" },
    { name: 'Neymar Jr', number: 11, position: 'Delantero', image:"../../assets/players/pedri.png" },
    { name: 'Luka Modric', number: 10, position: 'Centrocampista', image:"../../assets/players/pedri.png" },
    { name: 'Sergio Ramos', number: 4, position: 'Defensa', image:"../../assets/players/pedri.png" },
    { name: 'Thibaut Courtois', number: 1, position: 'Portero', image:"../../assets/players/pedri.png" }
  ];

  formacionTactica: formacionTactica = '3-3-3-1';
  jugadorSeleccionado: PlayerDetails | undefined;  

  ngOnInit() {
    this.asignarPosicionesJugadores();
  }

  asignarPosicionesJugadores() {
    // Lógica para asignar las posiciones de los jugadores en el campo según la formación táctica
    if (this.formacionTactica === '3-3-3-1') {
      this.asignarPosiciones3331();
    } else if (this.formacionTactica === '4-5-1') {
      this.asignarPosiciones451();
    }
    // ... otras formaciones tácticas
  }

  asignarPosiciones451() {
    // Asignar posiciones para la formación 4-5-1
    this.players = [
      { name: 'Cristiano Ronaldo', number: 7, position: 'Delantero', fieldPosition: { x: 300, y: 750 }, image:"../../assets/positions/df.png" },
      { name: 'Lionel Messi', number: 10, position: 'Delantero', fieldPosition: { x: 200, y: 200 }, image:"../../assets/positions/df.png" },
      { name: 'Neymar Jr', number: 11, position: 'Delantero', fieldPosition: { x: 300, y: 300 }, image:"../../assets/positions/df.png" },
      { name: 'Luka Modric', number: 10, position: 'Centrocampista', fieldPosition: { x: 400, y: 200 }, image:"../../assets/positions/df.png" },
      { name: 'Sergio Ramos', number: 4, position: 'Defensa', fieldPosition: { x: 500, y: 100 }, image:"../../assets/positions/df.png" },
      { name: 'Thibaut Courtois', number: 1, position: 'Portero', fieldPosition: { x: 600, y: 400 }, image:"../../assets/positions/df.png" },
      { name: 'Sergio Busquets', number: 5, position: 'Centrocampista', fieldPosition: { x: 400, y: 300 }, image:"../../assets/positions/df.png" },
      { name: 'Gerard Piqué', number: 3, position: 'Defensa', fieldPosition: { x: 500, y: 200 }, image:"../../assets/positions/df.png" },
      { name: 'Jordi Alba', number: 18, position: 'Defensa', fieldPosition: { x: 600, y: 300 }, image:"../../assets/positions/df.png" },
      { name: 'Sergi Roberto', number: 20, position: 'Centrocampista', fieldPosition: { x: 400, y: 100 }, image:"../../assets/positions/df.png" },
      { name: 'Marc-André ter Stegen', number: 1, position: 'Portero', fieldPosition: { x: 600, y: 100 }, image:"../../assets/positions/df.png" }
    ];

    this.players.forEach((playerDetails: PlayerDetails, index: number) => {
      const playerPositionElement = document.querySelector<HTMLDivElement>(
        `.player-position:nth-child(${index + 1})`
      );
      if(playerDetails.fieldPosition){
        const { x, y } = playerDetails.fieldPosition;
        
        if (playerPositionElement) {
          playerPositionElement.style.top = `${(y / 500) * 100}%`;
          playerPositionElement.style.left = `${(x / 800) * 100}%`;
        }
      } else{
        console.error("Player", playerDetails.name, "does not have a field position defined.")
      }
      }); 
  }

  showPlayerDetails(index: number) {
    const player = this.players[index - 1];
    const PlayerDetails = `Nombre: ${player.name}\nNúmero: ${player.number}\nPosición: ${player.position}`;
    alert(PlayerDetails);
  }

  /*openPopup(event: MouseEvent) {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        x: event.clientX,
        y: event.clientY
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El popup se cerró');
    });
  }*/

  asignarPosiciones3331() {
    // Asignar posiciones para la formación 3-3-3-1
    this.players = [
      { name: 'Sergi Roberto', number: 20, position: 'Centrocampista', fieldPosition: { x: 750, y: 240 }, image:"../../assets/players/pedri.png" },
      { name: 'Cristiano Ronaldo', number: 7, position: 'Delantero', fieldPosition: { x: 600, y: 120 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Lionel Messi', number: 10, position: 'Delantero', fieldPosition: { x: 600, y: 240 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Neymar Jr', number: 11, position: 'Centrocampista', fieldPosition: { x: 600, y: 350 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Luka Modric', number: 10, position: 'Centrocampista', fieldPosition: { x: 400, y: 120 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Sergio Ramos', number: 4, position: 'Defensa', fieldPosition: { x: 400, y: 240 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Thibaut Courtois', number: 1, position: 'Portero', fieldPosition: { x: 400, y: 350 }, image:"../../assets/players/pedri.png" },
      { name: 'Gerard Piqué', number: 3, position: 'Defensa', fieldPosition: { x: 200, y: 120 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Jordi Alba', number: 18, position: 'Defensa', fieldPosition: { x: 200, y: 240 }, image:"../../assets/players/pedri.png" },
      { name: 'Sergio Busquets', number: 5, position: 'Centrocampista', fieldPosition: { x: 200, y: 350 }, image:"../../assets/players/pedri.png" }, 
      { name: 'Marc-André ter Stegen', number: 1, position: 'Portero', fieldPosition: { x: 10, y: 240 }, image:"../../assets/players/pedri.png" }
    ];

    this.players.forEach((playerDetails: PlayerDetails, index: number) => {
      const playerPositionElement = document.querySelector<HTMLDivElement>(
        `.player-position:nth-child(${index + 1})`
      );
      if(playerDetails.fieldPosition){
        const { x, y } = playerDetails.fieldPosition;
        
        if (playerPositionElement) {
          playerPositionElement.style.top = `${(y / 500) * 100}%`;
          playerPositionElement.style.left = `${(x / 800) * 100}%`;
        }
      } else{
        console.error("Player", playerDetails.name, "does not have a field position defined.")
      }
      });      
    };

    getPlayerPosition(index: number) {
      const player = this.players[index];
      if (player.fieldPosition) {
        const { x, y } = player.fieldPosition;
        return {
          left: `${(x / 800) * 100}%`,
          top: `${(y / 500) * 100}%`,
          position: 'absolute',
          width: '60px', // Ajusta el tamaño de la imagen según sea necesario
          height: '60px' // Ajusta el tamaño de la imagen según sea necesario
        };
      }
      return {};
    }

    mostrarVentana(index: number) {
      this.jugadorSeleccionado = this.players[index];
    }
  
    cerrarVentana() {
      this.jugadorSeleccionado = undefined;
    }
  }