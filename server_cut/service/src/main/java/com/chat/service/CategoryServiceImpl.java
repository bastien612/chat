package com.chat.service;

import com.checklist.model.Category;
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
