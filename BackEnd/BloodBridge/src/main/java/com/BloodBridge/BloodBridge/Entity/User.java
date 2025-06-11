package com.BloodBridge.BloodBridge.Entity;

import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;

import com.BloodBridge.BloodBridge.Constants.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;


@Entity
@Data
@SuperBuilder
@Inheritance(strategy = InheritanceType.JOINED)
@RequiredArgsConstructor
public class User {
	
   public User(UUID userId2, String userName2, int age2, String bloodGroup2, int phoneNo2, String email2,
			String password2, Role role2) {
		// TODO Auto-generated constructor stub
	}

   @Id
   @GeneratedValue
   @UuidGenerator
   private UUID userId;
   
   private String userName;
   
   private int age;
   
   @Column(nullable = false)
   private String bloodGroup;
   
   @Column(nullable = false)
   private int phoneNo;
   
   @Column(nullable = false)
   private String email;
   
   @Column(nullable = false)
   private String password;
   
   @Enumerated(EnumType.STRING)
   private Role role;

}
