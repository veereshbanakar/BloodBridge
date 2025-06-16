package com.BloodBridge.BloodBridge.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BloodBridge.BloodBridge.entity.Donor;
import com.BloodBridge.BloodBridge.entity.User;

@Repository
public interface DonorRepository extends JpaRepository<Donor, UUID> {

	

}
