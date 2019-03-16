package com.chat.service.user;

import com.chat.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserModel findByName(String name) {

        return userRepository.findByName(name);
    }

    @Override
    public UserModel save(UserModel category) {
        return userRepository.save(category);
    }

}
