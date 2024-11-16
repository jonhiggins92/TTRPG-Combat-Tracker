import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CombatTrackerService } from '../combat-tracker.service';
import { CombatTrackerEntry } from '../combat-tracker-entry.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-combat-tracker-list',
    standalone: true,  // Declare as a standalone component
    imports: [CommonModule, HttpClientModule, FormsModule],  // Import necessary modules
    templateUrl: './combat-tracker-list.component.html',
    styleUrls: ['./combat-tracker-list.component.css']
})
export class CombatTrackerListComponent implements OnInit {
    entries: CombatTrackerEntry[] = [];

    constructor(private combatTrackerService: CombatTrackerService, public router: Router) {}

    ngOnInit(): void {
        this.fetchEntries();
    }

    editEntry(id: number): void {
        this.router.navigate(['/update', id]);
    }

    deleteEntry(id: number | undefined): void {
        if (id !== undefined) {
            this.combatTrackerService.deleteEntry(id).subscribe(
                () => {
                    this.entries = this.entries.filter(entry => entry.id !== id);
                },
                (error) => {
                    console.error('Error deleting entry', error);
                }
            );
        }
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

    searchQuery: string = '';

    onSearch(): void {
        if (this.searchQuery.trim()) {
            this.combatTrackerService.searchEntries(this.searchQuery).subscribe(
                (data: CombatTrackerEntry[]) => {
                    this.entries = data;
                },
                (error) => {
                    console.error('Error searching entries', error);
                }
            );
        } else {
            this.fetchEntries(); // Reset list when search is cleared
        }
    }

    navigateToReport(): void {
        this.router.navigate(['/report']);
    }


}
