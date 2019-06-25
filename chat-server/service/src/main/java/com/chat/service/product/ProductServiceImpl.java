package com.chat.service.product;

import com.chat.model.Product;
import com.chat.repository.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductDTO createProduct(ProductDTO productDto) {
        Product product = new Product();

        product.setName(productDto.getName());
        Product p = this.productRepository.save(product);

        productDto.setId(p.getId());
        return productDto;
    }
}
