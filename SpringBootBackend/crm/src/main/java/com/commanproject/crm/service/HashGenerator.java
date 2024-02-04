package com.commanproject.crm.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


public class HashGenerator {
	
//	SHA-256 HashStringGenerator
	public static String passwordHashGenerator(String password,String uId,String salt) {
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
