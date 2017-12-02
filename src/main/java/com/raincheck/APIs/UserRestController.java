package com.raincheck.APIs;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.raincheck.Models.User;
import com.raincheck.Repositories.UserRepository;

@RestController
@RequestMapping("/users")
public class UserRestController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(method = RequestMethod.GET)
	Collection<User> getAllCustomers() {
		return this.userRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	ResponseEntity<?> add(@RequestBody User input) {
		User x = new User(input.firstName, input.lastName);
		System.out.println(x.toString());
		try {
			this.userRepository.save(input);
			return ResponseEntity.status(201).build();
		} catch (Exception e) { return ResponseEntity.badRequest().build(); }
	}
}
