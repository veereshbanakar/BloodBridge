package com.BloodBridge.BloodBridge.Entity;

import java.util.UUID;

import com.BloodBridge.BloodBridge.Constants.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.Builder;
import lombok.Data;

@Entity
@PrimaryKeyJoinColumn(name = "userId")
@Data
public class Donor extends User{
	
	Donor(UUID userId, String userName, int age, String bloodGroup, int phoneNo, String email, String password,
			Role role) {
		super(userId, userName, age, bloodGroup, phoneNo, email, password, role);
		// TODO Auto-generated constructor stub
	}
	private String medical_Certificate;
	private boolean availability;

	

	

}
