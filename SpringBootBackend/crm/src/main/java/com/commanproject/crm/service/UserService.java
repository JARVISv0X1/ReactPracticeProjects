package com.commanproject.crm.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commanproject.crm.entity.User;
import com.commanproject.crm.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());
	   Map<String, Object> response = new HashMap<>();	
	public Map<String, Object> createUser(User user) {
		logger.info("Executing createUser();");

		User dbUserExist=getUserByEmailId(user.getEmailId());
		Date date = new Date();
		
		if(dbUserExist==null) {

				user.setUniqueId(randomUniqueIdGenerator());
				user.setSalt(usingRandomUUID());
				user.setPassword(HashGenerator.passwordHashGenerator(user.getPassword(),user.getUniqueId(),user.getSalt()));
				user.setUserStatus("Pending");
				user.setCreateDate(date);
				if(!(user.getUserType().equals("Merchant") || user.getUserType().equals("Reseller") )) {
					logger.error("Invalid UserType: "+user.getUserType());
					response.put("responseMessage","Invalid User Type");
				}
				else {
					userRepository.save(user);
					response.put("emailId",user.getEmailId());
					response.put("userType",user.getUserType());
					response.put("responseMessage","Registration Successfull");
					logger.info("Execution complete for save(user);");
				}
			}
		else {
			logger.error("User with email "+user.getEmailId()+ " Already Exist.");
			response.put("responseMessage","User Already Exits");
		}
		return response;
	}
		
		
	
	
	public User getUserByEmailId(String emailId) {
		logger.info("Finding user by email id : "+ emailId);
		 User user = userRepository.findByEmailId(emailId);

		    // Check if the user is not null before attempting to use it
		    if (user != null) {
		        return user;
		    } else {
		        return null; // or an empty string based on your requirements
		    }
	}
	
	public Map<String, Object> userLogin(User user) {
		logger.info("Login atempt for Email Id:"+ user.getEmailId());
		User dbUserExist=getUserByEmailId(user.getEmailId());
		String password= user.getPassword();
		User loginUser=new User();
//		Responses responses =new Responses();
		if(!(dbUserExist==null)) {
			try {
				logger.info("Find email id in db: "+ dbUserExist.getEmailId());
				loginUser.setEmailId(dbUserExist.getEmailId());
				loginUser.setUserStatus(dbUserExist.getUserStatus());
				loginUser.setUserType(dbUserExist.getUserType());
				if(dbUserExist.getUserStatus().equals("Active")) {
					
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
				response.put("responseMessage","validUser");
			}else {
				logger.error("Passsword is wrong.");
				response.put("responseMessage","Email id/Passsword is wrong.");
			}
		}else {
			logger.error("Email id is wrong.");
			response.put("responseMessage","Email id/Passsword is wrong.");
		}
		
		return response;
	}
	
	public String randomUniqueIdGenerator() {
		logger.info("Executing randomUniqueIdGenerator();");
		String uId="";
		for (int i=1;i<16;i++) {
			uId=uId+(int)(Math.floor(Math.random()*9));
		}
		return uId;
	}
	
	static String usingRandomUUID() {
		logger.info("Executing usingRandomUUID();");
	    UUID randomUUID = UUID.randomUUID();
	    String uuidString=randomUUID.toString().replaceAll("-", "");
	    int length=10;
		logger.info("Length: "+ length);

	    if (uuidString.length() >= length) {
            return uuidString.substring(0, length);
        } else {
        	// If the UUID string is shorter, pad with zeros
        	logger.info("Length is shorter Padding with zeros.");
        	return uuidString;
        }
	    }
}
