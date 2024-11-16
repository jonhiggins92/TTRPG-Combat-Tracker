import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CombatTrackerEntry } from './combat-tracker-entry.model';

@Injectable({
    providedIn: 'root'
})
export class CombatTrackerService {

  private apiUrl = 'http://localhost:8080/api' // Use the Docker Compose service name
  // Backend API URL

    constructor(private http: HttpClient) { }

    getEntries(): Observable<CombatTrackerEntry[]> {
        return this.http.get<CombatTrackerEntry[]>(this.apiUrl);
    }

    addEntry(entry: CombatTrackerEntry): Observable<CombatTrackerEntry> {
        return this.http.post<CombatTrackerEntry>(this.apiUrl, entry);
    }

    updateEntry(id: number, entry: CombatTrackerEntry): Observable<CombatTrackerEntry> {
        return this.http.put<CombatTrackerEntry>(`${this.apiUrl}/${id}`, entry);
    }

    deleteEntry(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getEntryById(id: number): Observable<CombatTrackerEntry> {
        return this.http.get<CombatTrackerEntry>(`${this.apiUrl}/${id}`);
    }

    searchEntries(query: string): Observable<CombatTrackerEntry[]> {
        return this.http.get<CombatTrackerEntry[]>(`${this.apiUrl}/search?query=${query}`);
    }


}
