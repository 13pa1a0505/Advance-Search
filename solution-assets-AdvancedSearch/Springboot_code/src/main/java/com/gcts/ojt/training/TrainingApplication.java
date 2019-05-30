package com.gcts.ojt.training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.gcts.ojt.controller.TestController;
@ComponentScan(basePackageClasses=TestController.class)
@SpringBootApplication
public class TrainingApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(TrainingApplication.class, args);
	}

}
