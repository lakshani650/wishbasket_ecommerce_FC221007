package com.wishbasket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wishbasket.entity.Product;
import com.wishbasket.repository.ProductRepository;

@Service
public class ProductService {

@Autowired
private ProductRepository repo;

public List<Product> getAllProducts(){
return repo.findAll();
}

public Product addProduct(Product product){
return repo.save(product);
}

public void deleteProduct(int id){
repo.deleteById(id);
}

}