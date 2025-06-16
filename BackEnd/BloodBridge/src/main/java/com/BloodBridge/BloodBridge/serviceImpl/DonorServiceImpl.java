package com.BloodBridge.BloodBridge.ServiceImpli;

import com.BloodBridge.BloodBridge.Constants.Role;
import com.BloodBridge.BloodBridge.Entity.Donor;
import com.BloodBridge.BloodBridge.Entity.User;
import com.BloodBridge.BloodBridge.Repository.DonorRepository;
import com.BloodBridge.BloodBridge.Service.DonorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class DonorServiceImpli implements DonorService {

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
