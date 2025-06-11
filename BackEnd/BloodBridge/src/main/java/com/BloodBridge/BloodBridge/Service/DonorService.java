package com.BloodBridge.BloodBridge.Service;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.Entity.Donor;


public interface DonorService {

	void registerDonor(Donor registerRequest);

}
