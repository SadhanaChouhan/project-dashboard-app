package com.projectdashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdashboard.model.Subscriber;

public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {}