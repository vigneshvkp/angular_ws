package com.example.demo.service;



import java.util.List;

import com.example.demo.model.User;

public interface UserService {
    List<User> getUsers();

    User getUser(Long id);

    User createUser(User user);

    User findUserByEmail(String email);

    User findUserByEmailAndPassword(String email, String password);
}
