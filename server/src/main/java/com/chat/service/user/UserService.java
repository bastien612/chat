package com.chat.service.user;

import com.chat.model.UserModel;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public UserModel findByName(String name);

    public UserModel save(UserModel user);
}
