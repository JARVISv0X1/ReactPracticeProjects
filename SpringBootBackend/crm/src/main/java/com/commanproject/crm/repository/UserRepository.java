package com.commanproject.crm.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.commanproject.crm.entity.User;

public interface UserRepository extends  JpaRepository<User, String>{

	User findByEmailId(String emailId);
	
	@Query(value = "SELECT email_id, mobile, unique_id, user_name, user_status, create_date, activation_date FROM user WHERE user_type = 'customer'", nativeQuery = true)
	ArrayList<Object[]> getAllCustomerList();

}
