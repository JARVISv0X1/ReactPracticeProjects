package com.commanproject.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.commanproject.crm.entity.User;

public interface UserRepository extends  JpaRepository<User, String>{

	String findByEmailId(String emailId);

}
