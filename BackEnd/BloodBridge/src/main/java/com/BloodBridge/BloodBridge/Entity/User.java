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


@Entity
@Data
@Builder
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
	
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
