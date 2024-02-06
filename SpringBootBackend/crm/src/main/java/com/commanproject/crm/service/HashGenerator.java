package com.commanproject.crm.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HashGenerator {
	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());

//	SHA-256 HashStringGenerator
	public static String passwordHashGenerator(String password,String uId,String salt) {
		logger.info("Inside passwordHashGenerator(); ");
		String hashPasswordString = password+uId+salt;
		try {
			hashPasswordString=generateSHA256Hash(hashPasswordString);

		}catch(Exception e) {
			System.out.println(e);
		}
		return hashPasswordString.toUpperCase();
	}
	
	
	
	
	
	public static String generateSHA256Hash(String input) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(input.getBytes());

        // Convert byte array to a hexadecimal string
        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }

        return hexString.toString();
    }
}
