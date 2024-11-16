import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CombatTrackerService } from '../combat-tracker.service';
import { CombatTrackerEntry } from '../combat-tracker-entry.model';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-combat-tracker-update',
  standalone: true,
  templateUrl: './combat-tracker-update.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./combat-tracker-update.component.css']
})
export class CombatTrackerUpdateComponent implements OnInit {
  entryId: number | null = null;
  entry: CombatTrackerEntry = new CombatTrackerEntry('', '', 0, 0);

  constructor(
    private combatTrackerService: CombatTrackerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.combatTrackerService.getEntryById(id).subscribe(
      (data) => (this.entry = data),
      (error) => console.error('Error fetching entry', error)
    );
  }

  updateEntry(): void {
    if (this.entry.id != null) {
      this.combatTrackerService.updateEntry(this.entry.id, this.entry).subscribe(
        () => this.router.navigate(['/list']),
        (error) => console.error('Error updating entry', error)
      );
    }
  }
}
