package com.chat.service.product;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


public interface ProductService {

    ProductDTO createProduct(ProductDTO product);
}
