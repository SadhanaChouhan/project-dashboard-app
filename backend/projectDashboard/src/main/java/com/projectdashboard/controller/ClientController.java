package com.projectdashboard.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectdashboard.model.Client;
import com.projectdashboard.repository.ClientRepository;

import java.util.List;
@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {
    @Autowired
    private ClientRepository repository;

    @GetMapping("/getClients")
    public List<Client> getAll() {
        return repository.findAll();
    }

    @PostMapping("/createClient")
    public Client create(@RequestBody Client item) {
        return repository.save(item);
    }
}