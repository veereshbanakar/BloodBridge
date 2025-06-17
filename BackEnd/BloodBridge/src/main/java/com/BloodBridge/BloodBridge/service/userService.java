package com.BloodBridge.BloodBridge.service;

import java.nio.file.attribute.UserDefinedFileAttributeView;

import org.springframework.stereotype.Service;

import com.BloodBridge.BloodBridge.entity.User;



public interface userService {
	
	public User userExits(String email);


}
