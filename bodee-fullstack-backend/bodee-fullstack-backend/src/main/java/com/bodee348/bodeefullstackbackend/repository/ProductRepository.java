package com.bodee348.bodeefullstackbackend.repository;

import com.bodee348.bodeefullstackbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT * FROM product WHERE product_name LIKE %:productName% AND retail_price <= :maxPrice", nativeQuery = true)
    public List<Product> getByProductName(@Param("productName") String productName,
                                          @Param("maxPrice") double maxPrice);
}
