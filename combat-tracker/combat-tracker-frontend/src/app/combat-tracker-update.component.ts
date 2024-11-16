import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CombatTrackerService } from './combat-tracker.service';
import { CombatTrackerEntry } from './combat-tracker-entry.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-combat-tracker-update',
  templateUrl: './combat-tracker-update.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./combat-tracker-update.component.css']
})
export class CombatTrackerUpdateComponent implements OnInit {
  // @ts-ignore
  entry: CombatTrackerEntry = new CombatTrackerEntry('', '', 0, 0);
  id: number;

  constructor(
    private combatTrackerService: CombatTrackerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getEntry();
  }

  getEntry(): void {
    this.combatTrackerService.getEntries().subscribe((entries) => {
      this.entry = entries.find((e) => e.id === this.id);
    });
  }

  updateEntry(): void {
    this.combatTrackerService.updateEntry(this.id, this.entry).subscribe(
      (response) => {
        console.log('Entry updated:', response);
        // Handle success, redirect or show a success message
        this.router.navigate(['/combat-tracker']);
      },
      (error) => {
        console.error('Error updating entry:', error);
      }
    );
  }
}
