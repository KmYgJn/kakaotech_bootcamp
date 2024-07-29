package com.qazyj.OAuth.JWT.repository;

import com.qazyj.OAuth.JWT.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}
