package com.projectdashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectdashboard.model.Project;
import com.projectdashboard.repository.ProjectRepository;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin("*")
public class ProjectController {
    @Autowired
    private ProjectRepository repository;

    @GetMapping("/getProject")
    public List<Project> getAll() {
        return repository.findAll();
    }

    @PostMapping("/createProject")
    public Project create(@RequestBody Project item) {
        return repository.save(item);
    }
}