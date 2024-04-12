package com.commanproject.crm.oauth;

import java.util.Date;
import io.jsonwebtoken.*;


public class JwtUtil {
	 private static final String SECRET = "your-secret-key";
	    private static final long EXPIRATION_TIME = 864_000_000; // 10 days
	    public static String generateToken(String username) {
			System.out.println("inside JwtUtil class > inside generateToken()");
	        return Jwts.builder()
	            .setSubject(username)
	            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
	            .signWith(SignatureAlgorithm.HS512, SECRET)
	            .compact();
	    }
	    public static String extractUsername(String token) {
			System.out.println("inside JwtUtil class > inside extractUsername()");
	        return Jwts.parser()
	            .setSigningKey(SECRET)
	            .parseClaimsJws(token)
	            .getBody()
	            .getSubject();
	    }
}
