package com.chat.controller;
import com.chat.model.product.ProductRessource;
import com.chat.service.product.ProductDTO;
import com.chat.service.product.ProductService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class ProductController {

    @Autowired
    public ProductService productService;

    @PostMapping(value = "/api/product")
    @ResponseBody
    ProductRessource createProduct(@RequestBody JsonNode productJson) {
        ProductRessource productRessource = productService.createProduct(productJson);

        return productRessource;
    }
}
