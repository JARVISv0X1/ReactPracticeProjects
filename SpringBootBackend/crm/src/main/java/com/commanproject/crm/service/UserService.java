package com.commanproject.crm.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commanproject.crm.commons.CommonMethods;
import com.commanproject.crm.entity.CustomerDTO;
import com.commanproject.crm.entity.ForgetOtp;
import com.commanproject.crm.entity.User;
import com.commanproject.crm.oauth.JwtUtil;
import com.commanproject.crm.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.commanproject.crm.constant.UserConstant;
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CommonMethods cm;

	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());
	public Map<String, Object> createCustomer(User user) {
		   Map<String, Object> response = new HashMap<>();	
		   User dbUserExist;
			Date date = new Date();
		logger.info("Executing createCustomer() Service;");

		if(user.getEmailId().equals("")) {
			response.put("responseMessage","Email ID is empty.");
			return response;
		}
		else if(user.getMobile().equals("")){
			response.put("responseMessage","Mobile Number is empty.");
			return response;
		}else if(user.getFirstName().equals("")){
			response.put("responseMessage","First Name is empty.");
			return response;
		}else if(user.getLastName().equals("")){
			response.put("responseMessage","Last Name is empty.");
			return response;
		}else if(user.getPassword().equals("")){
			response.put("responseMessage","Password is empty.");
			return response;
		}
//		else if(user.getUserName().equals("")){
//			response.put("responseMessage","Username is empty.");
//			return response;
//		}
		else {
			dbUserExist=cm.getUserByEmailId(user.getEmailId());
		}
		
		if(dbUserExist==null) {

				user.setUniqueId(cm.randomUniqueIdGenerator());
				user.setSalt(cm.usingRandomUUID());
				user.setPassword(HashGenerator.passwordHashGenerator(user.getPassword(),user.getUniqueId(),user.getSalt()));
				user.setCreateDate(date);
				if(user.getUserType()==null) {
					user.setUserType(UserConstant.CUSTOMER.toString());
					user.setUserStatus(UserConstant.PENDING.toString());
				}else {
					if(user.getUserType().equals(UserConstant.ADMIN.toString())) {
						user.setUserStatus(UserConstant.PENDING.toString());
					}else {
						logger.error("Invalid UserType: "+user.getUserType());
						response.put("responseMessage","Invalid User Type");
						return response;
					}
				}
				
					userRepository.save(user);
					response.put("emailId",user.getEmailId());
					response.put("userType",user.getUserType());
					response.put("responseMessage","Registration Successfull");
					logger.info("Execution complete for save(user);");
				
			}
		else {
			logger.error("User with email "+user.getEmailId()+ " Already Exist.");
			response.put("responseMessage","User Already Exits");
		}
		return response;
	}
		
		
	
	

	
	public Map<String, Object> userLogin(User user) {
		   Map<String, Object> response = new HashMap<>();	
		   
		   User dbUserExist;
		   if(user.getEmailId().equals("")) {
				response.put("responseMessage","Email ID is empty.");
				return response;
			}else if(user.getPassword().equals("")){
				response.put("responseMessage","Password is empty.");
				return response;
			}
			else {
				logger.info("Login atempt for Email Id:"+ user.getEmailId());
				dbUserExist=cm.getUserByEmailId(user.getEmailId());
			}
		   
		
		
		String password= user.getPassword();
		User loginUser=new User();
//		Responses responses =new Responses();
		
		if(!(dbUserExist==null)) {
			try {
				logger.info("Find email id in db: "+ dbUserExist.getEmailId());
				loginUser.setEmailId(dbUserExist.getEmailId());
				loginUser.setUserStatus(dbUserExist.getUserStatus());
				loginUser.setUserType(dbUserExist.getUserType());
				if(dbUserExist.getUserStatus().equals(UserConstant.ACTIVE.toString())) {
					
					loginUser.setPassword(HashGenerator.passwordHashGenerator(password,dbUserExist.getUniqueId(),dbUserExist.getSalt()));;
				}else {
					logger.error("User Status is: "+ loginUser.getUserStatus());
					response.put("userStatus ",loginUser.getUserStatus());
				}
			}catch(Exception e) {
				System.out.println("Exception: "+e);
			}
			if(loginUser.getPassword().equals(dbUserExist.getPassword()) ) {
				logger.info("User credentials for login is correct for email : "+ dbUserExist.getEmailId());
				response.put("emailId",loginUser.getEmailId());
				response.put("userType",loginUser.getUserType());
				response.put("userStatus",loginUser.getUserStatus());
				response.put("responseMessage","Login Successfull");
				String token = JwtUtil.generateToken(loginUser.getEmailId());
				response.put("token",token);
			}else {
				logger.error("Passsword is wrong.");
				response.put("responseMessage","Email id/Passsword is wrong.");
			}
		}else {
			logger.error("Email id is wrong.");
			response.put("responseMessage","Email id/Passsword is wrong.");
		}
		logger.info("Sending Responce to client for: "+ dbUserExist.getEmailId());

		return response;
	}
	
	
	public Map<String, Object> setNewPassword(User user) {
		   Map<String, Object> response = new HashMap<>();	
		   User dbUserExist;
			Date date = new Date();
		logger.info("Executing createUser();");

		if(user.getEmailId().equals("")) {
			response.put("responseMessage","Email ID is empty.");
			return response;
		}
		else if(user.getMobile().equals("")){
			response.put("responseMessage","Mobile Number is empty.");
			return response;
		}else if(user.getFirstName().equals("")){
			response.put("responseMessage","First Name is empty.");
			return response;
		}else if(user.getLastName().equals("")){
			response.put("responseMessage","Last Name is empty.");
			return response;
		}else if(user.getPassword().equals("")){
			response.put("responseMessage","Password is empty.");
			return response;
		}
		else {
			dbUserExist=cm.getUserByEmailId(user.getEmailId());
		}
		
		if(dbUserExist==null) {

				user.setUniqueId(cm.randomUniqueIdGenerator());
				user.setSalt(cm.usingRandomUUID());
				user.setPassword(HashGenerator.passwordHashGenerator(user.getPassword(),user.getUniqueId(),user.getSalt()));
				user.setCreateDate(date);
				if(user.getUserType()==null) {
					user.setUserType("customer");
					user.setUserStatus("active");
				}else {
					if(user.getUserType().equals("admin")) {
						user.setUserStatus("pending");
					}else {
						logger.error("Invalid UserType: "+user.getUserType());
						response.put("responseMessage","Invalid User Type");
						return response;
					}
				}
				
					userRepository.save(user);
					response.put("emailId",user.getEmailId());
					response.put("userType",user.getUserType());
					response.put("responseMessage","Registration Successfull");
					logger.info("Execution complete for save(user);");
				
			}
		else {
			logger.error("User with email "+user.getEmailId()+ " Already Exist.");
			response.put("responseMessage","User Already Exits");
		}
		return response;
	}
		
		
	public Map<String, Object> forgetPassword(ForgetOtp forgetOtpUser) {
		   Map<String, Object> response = new HashMap<>();	
		   User dbUserExist;
		logger.info("Executing forgetPassword();");

		if(forgetOtpUser.getEmailId().equals("")) {
			response.put("responseMessage","Email ID is empty.");
			return response;
		}
		else if(forgetOtpUser.getOtp()==null){
			response.put("responseMessage","OTP is empty.");
			return response;
		}
		else {
			dbUserExist=cm.getUserByEmailId(forgetOtpUser.getEmailId());
		}
	
		if(dbUserExist.getEmailId().equals(forgetOtpUser.getEmailId())) {
			forgetOtpUser=cm.getOtpByEmailId(forgetOtpUser.getEmailId());
			Date currentTime= new Date();
			Date expiryTime=forgetOtpUser.getExpiryTime();
			if(currentTime.after(expiryTime)) {
				response.put("responseMessage","Entered OTP is Expired");
				return response;
			}
			int tempOtp= forgetOtpUser.getOtp();
			if(tempOtp==forgetOtpUser.getOtp()) {
				response.put("responseMessage","Entered OTP is Correct");
			}else {
				response.put("responseMessage","Entered OTP is not Correct, Try Again!!");
			}
			}
		else {
			logger.error("No such User with email "+forgetOtpUser.getEmailId()+ " in DB");
			response.put("responseMessage","Entered a correct emailId");
		}
		return response;
	}
		
		
	
	public String getAllCustomerList() {
	    String json = "";
	    ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
	    
	    // Fetch the raw list from the database
	    ArrayList<Object[]> userList = userRepository.getAllCustomerList();
	    
	    // List to hold the mapped DTOs
	    List<CustomerDTO> customerDTOList = new ArrayList<>();

	    // Map each Object[] entry to a CustomerDTO
	    for (Object[] customer : userList) {
	        String emailId = (String) customer[0];
	        String mobile = (String) customer[1];
	        String uniqueId = (String) customer[2];
	        String userName = (String) customer[3];
	        String userStatus = (String) customer[4];
	        Date createDate = (Date) customer[5];
	        Date activationDate = (Date) customer[6];

	        // Create a new DTO and add it to the list
	        CustomerDTO customerDTO = new CustomerDTO(emailId, mobile, uniqueId, userName, userStatus, createDate, activationDate);
	        customerDTOList.add(customerDTO);
	    }

	    // Convert the DTO list to JSON
	    try {
	        json = ow.writeValueAsString(customerDTOList);
	    } catch (JsonProcessingException e) {
	        e.printStackTrace();
	    }

	    logger.info("Response String: " + json);
	    return json;
	}

}
