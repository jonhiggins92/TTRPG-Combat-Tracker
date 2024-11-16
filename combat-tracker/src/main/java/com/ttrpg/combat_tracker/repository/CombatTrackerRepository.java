package com.ttrpg.combat_tracker.repository;

import com.ttrpg.combat_tracker.model.CombatTrackerEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CombatTrackerRepository extends JpaRepository<CombatTrackerEntry, Long> {
}
