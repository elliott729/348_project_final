package com.bodee348.bodeefullstackbackend.controller;

import com.bodee348.bodeefullstackbackend.model.Purchase;
import com.bodee348.bodeefullstackbackend.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {
    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("/purchase")
    Purchase newPurchase(@RequestBody Purchase newPurchase) {
        return purchaseRepository.save(newPurchase);
    }

    @GetMapping("/purchases")
    List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }
}
