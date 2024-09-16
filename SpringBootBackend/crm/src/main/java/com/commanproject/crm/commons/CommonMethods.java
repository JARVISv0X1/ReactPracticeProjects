package com.commanproject.crm.commons;

import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commanproject.crm.entity.ForgetOtp;
import com.commanproject.crm.entity.User;
import com.commanproject.crm.repository.ForgetOtpRepository;
import com.commanproject.crm.repository.UserRepository;

@Service
public class CommonMethods {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ForgetOtpRepository forgetOtpRepository;
	private static Logger logger = LoggerFactory.getLogger(CommonMethods.class.getName());

	public String randomUniqueIdGenerator() {
		logger.info("Executing randomUniqueIdGenerator();");
		String uId="";
		for (int i=1;i<16;i++) {
			uId=uId+(int)(Math.floor(Math.random()*9));
		}
		return uId;
	}
	
	public String usingRandomUUID() {
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
	public ForgetOtp getOtpByEmailId(String emailId) {
		logger.info("Finding user OTP by email id : "+ emailId);
		 ForgetOtp user = forgetOtpRepository.findByEmailId(emailId);

		    // Check if the user is not null before attempting to use it
		    if (user != null) {
		        return user;
		    } else {
		        return null; // or an empty string based on your requirements
		    }
	}
}
