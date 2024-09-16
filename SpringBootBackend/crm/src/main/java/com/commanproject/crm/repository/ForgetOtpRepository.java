package com.commanproject.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.commanproject.crm.entity.ForgetOtp;

public interface ForgetOtpRepository extends  JpaRepository<ForgetOtp, String>{
	
	@Query(value = "SELECT * FROM FORGET_OTP WHERE EMAIL_ID = ?1 ORDER BY create_time DESC LIMIT 1", nativeQuery = true)
	ForgetOtp findByEmailId(String emailId);

}
