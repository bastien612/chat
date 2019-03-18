package com.chat.controller;

import com.chat.model.CategoryModel;
import com.chat.service.category.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RepositoryRestController
public class CategoryController {
    Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @Autowired
    private CategoryService service;

    @PostMapping(
            value = "/categories/add/list")
    public void addSet(@RequestBody List<CategoryModel> categories) {
        categories.forEach(category -> service.save(category));
    }
}

