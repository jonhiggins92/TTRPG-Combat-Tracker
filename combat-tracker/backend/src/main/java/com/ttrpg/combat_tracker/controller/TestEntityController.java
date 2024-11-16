package com.ttrpg.combat_tracker.controller;

import com.ttrpg.combat_tracker.model.TestEntity;
import com.ttrpg.combat_tracker.repository.TestEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/test-entity")
public class TestEntityController {

    @Autowired
    private TestEntityRepository repository;

    @PostMapping("/add")
    public ResponseEntity<String> addTestEntity(@RequestBody String name) {
        TestEntity entity = new TestEntity();
        entity.setName(name);
        repository.save(entity);
        return ResponseEntity.ok("Entity saved successfully");
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<TestEntity>> getAll() {
        return ResponseEntity.ok(repository.findAll());
    }
}
