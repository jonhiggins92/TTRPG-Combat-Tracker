import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CombatTrackerService } from '../combat-tracker.service';
import { CombatTrackerEntry } from '../combat-tracker-entry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat-tracker-list',
  standalone: true,  // Declare as a standalone component
  imports: [CommonModule, HttpClientModule],  // Import necessary modules
  templateUrl: './combat-tracker-list.component.html',
  styleUrls: ['./combat-tracker-list.component.css']
})
export class CombatTrackerListComponent implements OnInit {
  entries: CombatTrackerEntry[] = [];

  constructor(private combatTrackerService: CombatTrackerService) {}

  ngOnInit(): void {
    this.fetchEntries();
  }

  fetchEntries(): void {
    this.combatTrackerService.getEntries().subscribe(
        (data: CombatTrackerEntry[]) => {
          this.entries = data;
        },
        (error) => {
          console.error('Error fetching combat tracker entries', error);
        }
    );
  }
}
