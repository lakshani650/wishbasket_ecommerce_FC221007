package com.wishbasket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wishbasket.entity.Product;
import com.wishbasket.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {

@Autowired
private ProductService service;

@GetMapping
public List<Product> getProducts(){
return service.getAllProducts();
}

@PostMapping
public Product addProduct(@RequestBody Product product){
return service.addProduct(product);
}

@DeleteMapping("/{id}")
public void deleteProduct(@PathVariable int id){
service.deleteProduct(id);
}

}