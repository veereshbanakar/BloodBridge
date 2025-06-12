package com.BloodBridge.BloodBridge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.BloodBridge.BloodBridge.Service", "com.BloodBridge.BloodBridge.ServiceImpli",
    "com.BloodBridge.BloodBridge.Controller", "com.BloodBridge.BloodBridge.Repository",
    "com.BloodBridge.BloodBridge.Entity","com.BloodBridge.BloodBridge.Configuration"})
public class BloodBridgeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloodBridgeApplication.class, args);
	}

}
