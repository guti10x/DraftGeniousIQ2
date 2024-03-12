import { Component } from '@angular/core';

@Component({
  selector: 'infinite-event-scroll',
  standalone: true,
  imports: [],
  templateUrl: './infinite-event-scroll.component.html',
  styleUrl: './infinite-event-scroll.component.scss'
})
export class InfiniteEventScrollComponent {
  imageSources = ["../../assets/teams/1.png", "../../assets/teams/2.png", "../../assets/teams/3.png", "../../assets/teams/4.png", "../../assets/teams/5.png", "../../assets/teams/6.png", "../../assets/teams/7.png", "../../assets/teams/8.png", "../../assets/teams/9.png", "../../assets/teams/10.png", "../../assets/teams/11.png", "../../assets/teams/12.png", "../../assets/teams/13.png", "../../assets/teams/14.png", "../../assets/teams/15.png", "../../assets/teams/16.png", "../../assets/teams/17.png", "../../assets/teams/18.png", "../../assets/teams/19.png", "../../assets/teams/20.png"];
  resultados= [" 1 - 0 "," 2 - 0 "," 0 - 0 "," 2 - 0 "," 3 - 0 "," 1 - 1 "," 1 - 1 "," 1 - 4 "," 1 - 2 "," 1 - 1 "];
  
}
