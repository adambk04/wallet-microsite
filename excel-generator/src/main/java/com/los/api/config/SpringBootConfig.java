package com.los.api.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@ComponentScan(basePackages = {"com.los.api.*"})
@SpringBootApplication
@EnableScheduling
public class SpringBootConfig {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringBootConfig.class);
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootConfig.class, args);
		LOGGER.info("OCR Daily Report Generator Starting...");
	}
}
