package com.commanproject.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.commanproject.crm.entity.Product;

public interface ProductRepository extends  JpaRepository<Product, String>{

}
