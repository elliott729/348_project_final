package com.bodee348.bodeefullstackbackend.repository;

import com.bodee348.bodeefullstackbackend.model.OrderLine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderLineRepository extends JpaRepository<OrderLine, Long> {
}
