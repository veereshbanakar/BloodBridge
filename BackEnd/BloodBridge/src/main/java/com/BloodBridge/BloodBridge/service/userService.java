package com.BloodBridge.BloodBridge.Service;

import java.nio.file.attribute.UserDefinedFileAttributeView;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.Entity.User;



public interface userService {
	
	public User userExits(String email);


}
