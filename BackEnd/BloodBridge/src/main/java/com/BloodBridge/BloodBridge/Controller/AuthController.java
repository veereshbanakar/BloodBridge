package com.BloodBridge.BloodBridge.Controller;

import java.nio.file.attribute.UserDefinedFileAttributeView;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BloodBridge.BloodBridge.Entity.Donor;
import com.BloodBridge.BloodBridge.Entity.User;
import com.BloodBridge.BloodBridge.Service.AuthService;
import com.BloodBridge.BloodBridge.Service.DonorService;
import com.BloodBridge.BloodBridge.Service.userService;


@RestController
@RequestMapping("/bloodbridge")
public class AuthController {
	
	@Autowired
	AuthService service;
	
	@Autowired
	userService userService;
	
	@Autowired
	DonorService donorService;
	
	
	
	@PostMapping("/register/user")
	public ResponseEntity<String> registerUser(@RequestBody User registerRequest){
		
		try {
			 if(userService.userExits(registerRequest.getEmail()) != null)
				 return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exits");
			 service.registerUser(registerRequest);
			 return ResponseEntity.status(HttpStatus.CREATED).body("Registration succesfully");
		}
		catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			// TODO: handle exception
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong !");
		}
		
		 
	}
	
	
	@PostMapping("/register/Donor")
	public ResponseEntity<String> registerUser(@RequestBody Donor registerRequest){
		
		try {
			 if(userService.userExits(registerRequest.getUser().getEmail()) != null)
				 return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exits");
			 donorService.registerDonor(registerRequest);
			 return ResponseEntity.status(HttpStatus.CREATED).body("Registration succesfully");
		}
		catch (IllegalArgumentException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
			// TODO: handle exception
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
		}
		
		 
	}

}
