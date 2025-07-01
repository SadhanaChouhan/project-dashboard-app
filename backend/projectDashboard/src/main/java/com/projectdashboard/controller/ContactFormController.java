package com.projectdashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectdashboard.model.ContactForm;
import com.projectdashboard.repository.ContactFormRepository;

import java.util.List;

@RestController
@RequestMapping("/contactforms")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactFormController {
    @Autowired
    private ContactFormRepository repository;

    @GetMapping("/getContact")
    public List<ContactForm> getAll() {
        return repository.findAll();
    }

    @PostMapping("/create")
    public ContactForm create(@RequestBody ContactForm item) {
        return repository.save(item);
    }
}