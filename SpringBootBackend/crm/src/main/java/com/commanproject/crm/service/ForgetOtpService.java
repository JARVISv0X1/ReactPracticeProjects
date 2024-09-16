package com.commanproject.crm.service;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commanproject.crm.commons.CommonMethods;
import com.commanproject.crm.entity.ForgetOtp;
import com.commanproject.crm.entity.User;
import com.commanproject.crm.repository.ForgetOtpRepository;

@Service
public class ForgetOtpService {
	@Autowired
	private ForgetOtpRepository forgetOtpRepository;
	@Autowired
	private CommonMethods cm ;

	private static Logger logger = LoggerFactory.getLogger(ForgetOtpService.class.getName());
	
	public Map<String, Object> generateForgetPasswordOtp(ForgetOtp user) {
		   Map<String, Object> response = new HashMap<>();	
		   
		   User dbUserExist;
//		   user.setEmailId("karan.kumar@cashlesso.com");
		   if(user.getEmailId().equals("")) {
				response.put("responseMessage","Email ID is empty.");
				return response;
			}
			else {
				logger.info("Generate forget OTP atempt for Email Id:"+ user.getEmailId());
				logger.info("Finding email id in db: "+ user.getEmailId());
				dbUserExist=cm.getUserByEmailId(user.getEmailId());
			}
//		Responses responses =new Responses();
		
		if(!(dbUserExist==null)) {
			try {
				logger.info("Email id: "+ dbUserExist.getEmailId() +" exists in our system");
				 Random rnd = new Random();
				    int otpNumber = rnd.nextInt(999999);
					logger.info("Generated otp for email id: "+ dbUserExist.getEmailId() +" is "+otpNumber);
					Date createTime = new Date();
		            user.setCreateTime(createTime);
		            user.setOtp(otpNumber);
		            user.setEmailId(user.getEmailId());
		            // Set expiry time after 10 minutes
		            Calendar calendar = Calendar.getInstance();
		            calendar.setTime(createTime);
		            calendar.add(Calendar.MINUTE, 10);  // Add 10 minutes to current time
		            Date expiryTime = calendar.getTime();
		            user.setExpiryTime(expiryTime);

//		            user.setOtp(123456);
//		            user.setExpiryTime();
//		            user.setEmailId("karankumar3221@gmail.com");
		            forgetOtpRepository.save(user);
					response.put("responseStatus","000");
					response.put("responseMessage","Otp generated and send on number: "+dbUserExist.getMobile());
			}catch(Exception e) {
				System.out.println("Exception: "+e);
			}
			
		}else {
			logger.error("Email id is wrong.");
			response.put("responseStatus","111");
			response.put("responseMessage","Email id is wrong.");
		}
		logger.info("Sending Responce to client for: "+ dbUserExist.getEmailId());

		return response;
	}
	

}
