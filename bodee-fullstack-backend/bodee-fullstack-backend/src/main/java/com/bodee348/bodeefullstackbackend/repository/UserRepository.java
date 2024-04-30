package com.bodee348.bodeefullstackbackend.repository;

import com.bodee348.bodeefullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
