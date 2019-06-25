package com.chat.controller;
import com.chat.service.product.ProductDTO;
import com.chat.service.product.ProductRessource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ProductController {

    /* @PostMapping etc*/
    @PostMapping
    ProductRessource createProduct(ProductDTO product) {


    }
}
