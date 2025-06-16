package com.BloodBridge.BloodBridge.service;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.entity.User;


public interface AuthService {

	void registerUser(User registerRequest);

	

}
