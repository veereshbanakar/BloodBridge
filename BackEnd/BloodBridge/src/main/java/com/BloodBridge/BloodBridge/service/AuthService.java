package com.BloodBridge.BloodBridge.Service;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.Entity.User;


public interface AuthService {

	void registerUser(User registerRequest);

	

}
