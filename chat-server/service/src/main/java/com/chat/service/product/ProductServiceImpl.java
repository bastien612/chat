package com.chat.service.product;

import com.chat.model.product.Product;
import com.chat.model.product.ProductRessource;
import com.chat.repository.product.ProductRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductRessource createProduct(JsonNode productJson) {
        Product productF = new Product();

        productF.setName(productJson.get("name").asText());
        Product p = this.productRepository.save(productF);


        return p;
    }
}
