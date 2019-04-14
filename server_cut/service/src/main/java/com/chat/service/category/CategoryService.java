package com.chat.service.category;

import org.springframework.stereotype.Service;
import com.chat.model.CategoryModel;

@Service
public interface CategoryService {


    public CategoryModel findByName(String name);

    public CategoryModel save(CategoryModel category);
}
