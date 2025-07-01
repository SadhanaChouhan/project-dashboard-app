import { Component } from '@angular/core';
import { ProjectDashboardService } from '../../../service/project-dashboard.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 projects: any[] = [];
   constructor(private projectService: ProjectDashboardService) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((data: any[]) => {
      this.projects = data;
    });
  }
}
