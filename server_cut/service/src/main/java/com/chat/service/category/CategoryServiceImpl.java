package com.chat.service.category;

import com.chat.model.CategoryModel;
import com.chat.repository.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryModel findByName(String name) {

        return categoryRepository.findByName(name);
    }

    @Override
    public CategoryModel save(CategoryModel category) {
        return categoryRepository.save(category);
    }
}
