package com.projectdashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdashboard.model.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {}