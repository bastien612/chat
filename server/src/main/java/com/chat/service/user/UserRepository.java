package com.chat.service.user;

import com.chat.model.UserModel;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<UserModel, Long> {

    public UserModel findByName(String name);
}
