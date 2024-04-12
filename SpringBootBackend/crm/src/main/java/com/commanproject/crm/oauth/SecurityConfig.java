package com.commanproject.crm.oauth;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		System.out.println("inside SecurityConfig class > inside configure()");
        http.csrf().disable().cors().disable()
            .authorizeRequests()
            .antMatchers("/user/login").permitAll() // Exclude login and token endpoints from authentication
            .anyRequest().authenticated();
    }
}
