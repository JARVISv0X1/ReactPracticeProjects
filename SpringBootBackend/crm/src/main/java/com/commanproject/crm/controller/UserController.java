package com.commanproject.crm.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.commanproject.crm.entity.ForgetOtp;
import com.commanproject.crm.entity.User;
import com.commanproject.crm.service.ForgetOtpService;
import com.commanproject.crm.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());

	@Autowired
	private UserService userService;
	@Autowired
	private ForgetOtpService forgetOtpService;
	
	@PostMapping("/customerSignUpByAdmin")
	public Map<String, Object> addUser(@RequestBody User user) {
		logger.info("Executing addCustomer()");
		return userService.createCustomer(user);
	}
	
	@PostMapping("/login")
	public Map<String, Object> userLogin(@RequestBody User loginUser) {
		logger.info("Executing userLogin();");

		return userService.userLogin(loginUser);
		
	}
	@PostMapping("/forgetPasswordOtpGenarator")
	public Map<String, Object> generateForgetPasswordOtp(@RequestBody ForgetOtp forgetOtpUser) {
		logger.info("Executing generateForgetPasswordOtp();");

		return forgetOtpService.generateForgetPasswordOtp(forgetOtpUser);
		
	}
	
	@PostMapping("/forgetPassword")
	public Map<String,Object>forgetPassword(@RequestBody ForgetOtp forgetOtpUser) {
		logger.info("Executing generateForgetPasswordOtp();");

		return userService.forgetPassword(forgetOtpUser);
		
	}
	
	@PostMapping("/getAllCustomerList")
	public String getAllCustomerList() {
		logger.info("Executing getAllCustomerList();");
		return userService.getAllCustomerList();
		
	}
	
}
