package com.raincheck.Repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.raincheck.Models.User;

public interface UserRepository extends MongoRepository<User, String> {

    public User findByFirstName(String firstName);
    public List<User> findByLastName(String lastName);

}