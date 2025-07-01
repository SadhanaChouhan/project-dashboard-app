import { Component } from '@angular/core';
import { ProjectDashboardService } from '../../../service/project-dashboard.service';

@Component({
  selector: 'app-clients',
  standalone: false,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
clients :any[]=[];


   constructor(private projectService: ProjectDashboardService) {}

  ngOnInit(): void {
    this.projectService.getAllClients().subscribe((data: any[]) => {
      this.clients = data;
    });
  }
}
