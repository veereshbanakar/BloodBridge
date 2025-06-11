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
		

		User donor=Donor.builder().userName(registerRequest.getUserName())
                .age(registerRequest.getAge())
                .bloodGroup(registerRequest.getBloodGroup())
                .phoneNo(registerRequest.getPhoneNo())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.DONOR)
                .medical_Certificate(registerRequest.getMedical_Certificate())
                .availability(false)
                .build();
		donorRepository.save( donor);
		
		
	}

}
