import { Component } from '@angular/core';
import { CombatTrackerService } from '../combat-tracker.service';
import { CombatTrackerEntry } from '../combat-tracker-entry.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-combat-tracker-add',
  templateUrl: './combat-tracker-add.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./combat-tracker-add.component.css']
})
export class CombatTrackerAddComponent {
  newEntry: CombatTrackerEntry = new CombatTrackerEntry('', '', 0, 0);

  constructor(private combatTrackerService: CombatTrackerService) {}

  addEntry(): void {
    this.combatTrackerService.addEntry(this.newEntry).subscribe(
      (response) => {
        console.log('New entry added:', response);
        // Handle success, such as clearing the form or showing a success message
      },
      (error) => {
        console.error('Error adding entry:', error);
      }
    );
  }
}