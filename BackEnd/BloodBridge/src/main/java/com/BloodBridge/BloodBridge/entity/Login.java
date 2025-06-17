package com.BloodBridge.BloodBridge.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class Login {
	
	private String email;
	private String password;
	

}
