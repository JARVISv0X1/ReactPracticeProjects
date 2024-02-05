package com.commanproject.crm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.commanproject.crm.entity.User;
import com.commanproject.crm.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/createUser")
	public String addUser(@RequestBody User user) {
		
		return userService.createUser(user);
		
	}
	
	@PostMapping("/login")
	public String userLogin(@RequestBody User loginUser) {
		
		return userService.userLogin(loginUser);
		
	}
}
