package com.BloodBridge.BloodBridge.ServiceImpli;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.Entity.User;
import com.BloodBridge.BloodBridge.Repository.UserRepository;
import com.BloodBridge.BloodBridge.Service.userService;


@Service
public class UserServiceImpli implements userService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User userExits(String email) {
		
		return userRepository.findByEmail(email);
		
	}



}
