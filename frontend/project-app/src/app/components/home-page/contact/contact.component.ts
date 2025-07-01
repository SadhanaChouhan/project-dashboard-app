import { Component } from '@angular/core';
import { ProjectDashboardService } from '../../../service/project-dashboard.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
contacts: any =[];


   constructor(private projectService: ProjectDashboardService) {}

  ngOnInit(): void {
    this.projectService.getAllContacts().subscribe((data: any[]) => {
      this.contacts = data;
    });
  }
}
