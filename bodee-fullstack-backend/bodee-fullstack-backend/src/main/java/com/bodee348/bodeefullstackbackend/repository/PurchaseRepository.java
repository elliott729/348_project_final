package com.bodee348.bodeefullstackbackend.repository;

import com.bodee348.bodeefullstackbackend.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
