package com.commanproject.crm.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.commanproject.crm.entity.Product;
import com.commanproject.crm.service.ProductService;
import com.commanproject.crm.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductController {
	private static Logger logger = LoggerFactory.getLogger(UserService.class.getName());
	
	@Autowired
	private ProductService productService;

	@PostMapping("/addProduct")
	public Map<String, Object> addProduct(@RequestBody Product product) {
		logger.info("Executing addProduct();");
		return productService.saveProduct(product);
	}
}
