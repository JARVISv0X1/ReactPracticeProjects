package com.commanproject.crm.service;

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

		boolean emailIdExist=getUserByEmailId(user.getEmailId());
		
		if(emailIdExist==false) {
			try {
				user.setUniqueId(randomUniqueIdGenerator());
				user.setSalt(usingRandomUUID());
				user.setPassword(HashGenerator.passwordHashGenerator(user.getPassword(),user.getUniqueId(),user.getSalt()));;
				userRepository.save(user);
			}catch(Exception e) {
				System.out.println("Exception: "+e);
			}
			return "User Added SuccessFull";
		}else {
			return "User with email "+emailIdExist+ " Already Exist.";
		}
		 
	}
	
	public boolean getUserByEmailId(String emailId) {
		 User user = userRepository.findByEmailId(emailId);

		    // Check if the user is not null before attempting to use it
		    if (user != null) {
		        return true;
		    } else {
		        return false; // or an empty string based on your requirements
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
