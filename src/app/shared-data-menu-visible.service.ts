// shared-data-menu-visible.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataMenuVisibleService {
  menuVisible: boolean = true;

  constructor() {}

  toggleMenuVisibility(): void {
    this.menuVisible = !this.menuVisible;
  }
}