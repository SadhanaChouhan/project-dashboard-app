package com.projectdashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdashboard.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {}
