package com.chat.controller;
import com.chat.service.product.ProductDTO;
import com.chat.service.product.ProductRessource;
import com.chat.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ProductController {

    @Autowired
    public ProductService productService;

    @PostMapping(value = "/product")
    @ResponseBody
    ProductDTO createProduct(@RequestBody ProductDTO product) {
        ProductDTO dto = productService.createProduct(product);

        return dto;
    }
}
