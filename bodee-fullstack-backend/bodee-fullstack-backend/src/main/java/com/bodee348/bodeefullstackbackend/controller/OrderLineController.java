package com.bodee348.bodeefullstackbackend.controller;

import com.bodee348.bodeefullstackbackend.model.OrderLine;
import com.bodee348.bodeefullstackbackend.repository.OrderLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrderLineController {
    @Autowired
    private OrderLineRepository orderLineRepository;

    @PostMapping("/orderLine")
    OrderLine newOrderLine(@RequestBody OrderLine newOrderLine) {
        return orderLineRepository.save(newOrderLine);
    }

    @GetMapping("/orderLines")
    List<OrderLine> getAllOrderLines() {
        return orderLineRepository.findAll();
    }
}
