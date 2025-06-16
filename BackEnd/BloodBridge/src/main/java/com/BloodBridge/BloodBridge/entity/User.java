package com.BloodBridge.BloodBridge.Entity;

import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;

import com.BloodBridge.BloodBridge.Constants.Role;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor

public class User {

	@Id
    @UuidGenerator(style = UuidGenerator.Style.AUTO) // Ensure correct style
    @Column(name = "userId", updatable = false, nullable = false)
	
    private UUID userId;

    private String userName;

    private int age;

   
    private String bloodGroup;

    
    private String phoneNo;

   
    private String email;

    
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;
}
