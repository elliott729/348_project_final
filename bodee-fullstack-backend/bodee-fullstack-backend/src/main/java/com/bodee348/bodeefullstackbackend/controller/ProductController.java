package com.bodee348.bodeefullstackbackend.controller;

import com.bodee348.bodeefullstackbackend.exception.UserNotFoundException;
import com.bodee348.bodeefullstackbackend.model.Product;
import com.bodee348.bodeefullstackbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("/products")
    List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/product/{price}/{text}")
    List<Product> getByProductName(@PathVariable String text, @PathVariable double price) {
        return productRepository.getByProductName(text, price);
    }

    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateUser(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id).map(product -> {
            product.setProductName(newProduct.getProductName());
            product.setRetailPrice(newProduct.getRetailPrice());
            product.setWholesalePrice(newProduct.getWholesalePrice());
            product.setQuantity(newProduct.getQuantity());
            return productRepository.save(product);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id) {
        if(!productRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product with id " + id + " has been deleted";
    }
}
