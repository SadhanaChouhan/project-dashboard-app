package com.projectdashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectdashboard.model.Subscriber;
import com.projectdashboard.repository.SubscriberRepository;

import java.util.List;

@RestController
@RequestMapping("/subscribers")
@CrossOrigin(origins = "http://localhost:4200")
public class SubscriberController {
    @Autowired
    private SubscriberRepository repository;

    @GetMapping
    public List<Subscriber> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Subscriber create(@RequestBody Subscriber item) {
        return repository.save(item);
    }
}