package com.BloodBridge.BloodBridge.serviceImpl;

import com.BloodBridge.BloodBridge.entity.Donor;
import com.BloodBridge.BloodBridge.entity.User;
import com.BloodBridge.BloodBridge.repository.DonorRepository;
import com.BloodBridge.BloodBridge.service.DonorService;
import com.BloodBridge.BloodBridge.valueObjects.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class DonorServiceImpl implements DonorService {

	@Autowired
	PasswordEncoder passwordEncoder;

	
	@Autowired
	DonorRepository donorRepository;
	
	@Override
	public void registerDonor(Donor registerRequest) {
		
		   User user = registerRequest.getUser();

		    user.setRole(Role.DONOR);
		    user.setPassword(passwordEncoder.encode(user.getPassword()));

		    registerRequest.setAvailability(false); // default
		    registerRequest.setUser(user);

		    donorRepository.save(registerRequest);
		
		
	}

}
