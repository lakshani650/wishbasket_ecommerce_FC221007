package com.wishbasket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wishbasket.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{

}