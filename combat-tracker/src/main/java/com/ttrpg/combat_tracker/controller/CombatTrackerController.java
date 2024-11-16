package com.ttrpg.combat_tracker.controller;

import com.ttrpg.combat_tracker.model.CombatTrackerEntry;
import com.ttrpg.combat_tracker.repository.CombatTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/combat-tracker")
@CrossOrigin(origins = "http://localhost:4200") // Allow frontend to communicate
public class CombatTrackerController {

    @Autowired
    private CombatTrackerRepository repository;

    @GetMapping
    public List<CombatTrackerEntry> getAllEntries() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<CombatTrackerEntry> addEntry(@RequestBody CombatTrackerEntry entry) {
        CombatTrackerEntry savedEntry = repository.save(entry);  // Save the entry to the database
        return ResponseEntity.ok(savedEntry);  // Return the saved entity with the generated ID
    }


    @PutMapping("/{id}")
    public CombatTrackerEntry updateEntry(@PathVariable Long id, @RequestBody CombatTrackerEntry updatedEntry) {
        return repository.findById(id)
                .map(entry -> {
                    entry.setCharacterName(updatedEntry.getCharacterName());
                    entry.setPlayerName(updatedEntry.getPlayerName());
                    entry.setInitiative(updatedEntry.getInitiative());
                    entry.setHealth(updatedEntry.getHealth());
                    return repository.save(entry);
                })
                .orElseThrow(() -> new RuntimeException("Entry not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CombatTrackerEntry> getEntryById(@PathVariable Long id) {
        Optional<CombatTrackerEntry> entry = repository.findById(id);
        return entry.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
