package com.BloodBridge.BloodBridge.service;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.entity.Donor;


public interface DonorService {

	void registerDonor(Donor registerRequest);

}
