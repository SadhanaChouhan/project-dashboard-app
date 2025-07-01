package com.projectdashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdashboard.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {}