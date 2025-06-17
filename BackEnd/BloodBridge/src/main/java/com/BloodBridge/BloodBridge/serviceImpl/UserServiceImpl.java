package com.BloodBridge.BloodBridge.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.entity.User;
import com.BloodBridge.BloodBridge.repository.UserRepository;
import com.BloodBridge.BloodBridge.service.userService;


@Service
public class UserServiceImpl implements userService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User userExits(String email) {
		
		return userRepository.findByEmail(email);
		
	}



}
