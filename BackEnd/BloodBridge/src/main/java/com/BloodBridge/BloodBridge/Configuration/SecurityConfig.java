package com.BloodBridge.BloodBridge.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    // ✅ Security filter chain configuration
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    	 http.csrf(csrf -> csrf.disable());

    	    http.authorizeHttpRequests(request -> request
    	        .anyRequest().permitAll()); // ❗ All endpoints are publicly accessible

    	    http.formLogin(form -> form.disable());
    	    http.httpBasic(Customizer.withDefaults());

    	    return http.build();
    }

    // ✅ Password encoder bean
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
