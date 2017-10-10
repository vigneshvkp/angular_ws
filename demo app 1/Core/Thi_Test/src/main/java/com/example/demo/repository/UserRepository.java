package com.example.demo.repository;


import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;

import javax.transaction.Transactional;

@Transactional
public interface UserRepository extends CrudRepository<User, Long> {

    User findOneByEmail(String email);

    User findOneByEmailAndPassword(String email, String password);
}
