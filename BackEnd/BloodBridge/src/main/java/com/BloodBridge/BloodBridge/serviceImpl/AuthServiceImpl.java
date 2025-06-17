package com.BloodBridge.BloodBridge.serviceImpl;

import java.lang.module.ModuleDescriptor.Builder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.entity.User;
import com.BloodBridge.BloodBridge.repository.UserRepository;
import com.BloodBridge.BloodBridge.service.AuthService;
import com.BloodBridge.BloodBridge.valueObjects.Role;


@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void registerUser(User registerRequest) {
		
	User user=User.builder().userName(registerRequest.getUserName())
			                .age(registerRequest.getAge())
			                .bloodGroup(registerRequest.getBloodGroup())
			                .phoneNo(registerRequest.getPhoneNo())
			                .email(registerRequest.getEmail())
			                .password(passwordEncoder.encode(registerRequest.getPassword()))
			                .role(Role.RECEIVER)
			                .build();
	
	userRepository.save(user);
		
	}

	
}
