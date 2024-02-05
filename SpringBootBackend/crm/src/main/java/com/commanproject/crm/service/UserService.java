package com.commanproject.crm.service;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.commanproject.crm.entity.User;
import com.commanproject.crm.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public String createUser(User user) {

		User dbUserExist=getUserByEmailId(user.getEmailId());
		Date date = new Date();
		if(dbUserExist==null) {
			try {
				user.setUniqueId(randomUniqueIdGenerator());
				user.setSalt(usingRandomUUID());
				user.setPassword(HashGenerator.passwordHashGenerator(user.getPassword(),user.getUniqueId(),user.getSalt()));
				user.setUserStatus("Pending");
				user.setCreateDate(date);
				if(!(user.getUserType().equals("Merchant") || user.getUserType().equals("Reseller") )) {
					return "Invalid User Type";
				}
				else {
					userRepository.save(user);
				}

			}catch(Exception e) {
				System.out.println("Exception: "+e);
			}
			return "User Added SuccessFull";
		}else {
			return "User with email "+dbUserExist.getEmailId()+ " Already Exist.";
		}
		 
	}
	
	public User getUserByEmailId(String emailId) {
		 User user = userRepository.findByEmailId(emailId);

		    // Check if the user is not null before attempting to use it
		    if (user != null) {
		        return user;
		    } else {
		        return null; // or an empty string based on your requirements
		    }
	}
	
	public String userLogin(User user) {
		User dbUserExist=getUserByEmailId(user.getEmailId());
		String password= user.getPassword();
		User loginUser=new User();
		if(!(dbUserExist==null)) {
			try {
				loginUser.setEmailId(dbUserExist.getEmailId());
				if(dbUserExist.getUserStatus().equals("Active")) {
					loginUser.setPassword(HashGenerator.passwordHashGenerator(password,dbUserExist.getUniqueId(),dbUserExist.getSalt()));;
				}else {
					
					return "User Status is: "+ dbUserExist.getUserStatus();
				}
			}catch(Exception e) {
				System.out.println("Exception: "+e);
			}
			if(loginUser.getPassword().equals(dbUserExist.getPassword()) ) {
				return "Login Successfull";
			}else {
				return "Email id/Passsword is wrong.";
			}
		}else {
			return "Email id/Passsword is wrong.";
		}
		
	}
	
	public String randomUniqueIdGenerator() {
		String uId="";
		for (int i=1;i<16;i++) {
			uId=uId+(int)(Math.floor(Math.random()*9));
		}
		return uId;
	}
	
	static String usingRandomUUID() {

	    UUID randomUUID = UUID.randomUUID();
	    String uuidString=randomUUID.toString().replaceAll("-", "");
	    int length=10;
	    if (uuidString.length() >= length) {
            return uuidString.substring(0, length);
        } else {
        	// If the UUID string is shorter, pad with zeros
        	return uuidString;
        }
	    }
}
