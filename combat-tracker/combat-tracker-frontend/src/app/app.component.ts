import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  // Allow routing to load components dynamically
    CommonModule,
    RouterLink
  ],
  template: `
    <nav>
      <a routerLink="/list">Combat Tracker List</a>
      <a routerLink="/add">Add New Entry</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        margin-bottom: 20px;
      }
      a {
        margin-right: 15px;
        text-decoration: none;
        color: blue;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
