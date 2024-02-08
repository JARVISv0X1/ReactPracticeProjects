package com.commanproject.crm.service;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.commanproject.crm.entity.Product;

@Service
public class ProductService {
	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());

	public Map<String, Object> saveProduct(Product product) {
		logger.info("Inside saveProduct()");
		   Map<String, Object> response = new HashMap<>();	
		   
		   return response;
	}
}
