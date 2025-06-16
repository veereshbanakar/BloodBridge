package com.BloodBridge.BloodBridge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.BloodBridge.BloodBridge.service", "com.BloodBridge.BloodBridge.serviceImpl",
    "com.BloodBridge.BloodBridge.controller", "com.BloodBridge.BloodBridge.repository",
    "com.BloodBridge.BloodBridge.entity","com.BloodBridge.BloodBridge.configuration"})
public class BloodBridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloodBridgeApplication.class, args);
	}

}
