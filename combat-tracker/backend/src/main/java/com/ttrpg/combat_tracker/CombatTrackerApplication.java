package com.ttrpg.combat_tracker;

import com.ttrpg.combat_tracker.model.TestEntity;
import com.ttrpg.combat_tracker.repository.TestEntityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CombatTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CombatTrackerApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(TestEntityRepository repository) {
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				TestEntity entity = new TestEntity();
				entity.setName("Test Name");
				repository.save(entity);
			}
		};

	}
}


