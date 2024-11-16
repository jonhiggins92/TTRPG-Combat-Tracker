package com.ttrpg.combat_tracker.repository;

import com.ttrpg.combat_tracker.model.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestEntityRepository extends JpaRepository<TestEntity, Long> {
}
