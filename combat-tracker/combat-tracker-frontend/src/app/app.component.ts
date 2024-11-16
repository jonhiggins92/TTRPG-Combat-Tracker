import { Component } from '@angular/core';
import { CombatTrackerListComponent } from './combat-tracker-list/combat-tracker-list.component';  // Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CombatTrackerListComponent
  ],
  template: '<app-combat-tracker-list></app-combat-tracker-list>'  // Use the component in the template
})
export class AppComponent {
  title = 'combat-tracker';
}
