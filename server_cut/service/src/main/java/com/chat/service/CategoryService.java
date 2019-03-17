package com.chat.service;

import org.springframework.stereotype.Service;
import model.CategoryModel

@Service
public interface CategoryService {


    public CategoryModel findByName(String name);

    public CategoryModel save(CategoryModel category);
}
