package com.BloodBridge.BloodBridge.ServiceImpli;

import java.lang.module.ModuleDescriptor.Builder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.Constants.Role;
import com.BloodBridge.BloodBridge.Entity.User;
import com.BloodBridge.BloodBridge.Repository.UserRepository;
import com.BloodBridge.BloodBridge.Service.AuthService;


@Service
public class AuthServiceImpli implements AuthService {
	
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
