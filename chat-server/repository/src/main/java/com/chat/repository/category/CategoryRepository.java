package com.chat.repository.category;

import com.chat.model.CategoryModel;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CategoryRepository extends PagingAndSortingRepository<CategoryModel, Long> {

    public CategoryModel findByName(String name);

}
