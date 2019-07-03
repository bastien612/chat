package com.chat.service.product;

import com.chat.model.product.ProductRessource;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


public interface ProductService {

    ProductRessource createProduct(JsonNode product);
}
