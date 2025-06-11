package com.BloodBridge.BloodBridge.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BloodBridge.BloodBridge.Entity.Donor;
import com.BloodBridge.BloodBridge.Entity.User;

@Repository
public interface DonorRepository extends JpaRepository<Donor, UUID> {

	void save(User donor);

}
