import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectDashboardService } from '../../../service/project-dashboard.service';

@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {

  form: FormGroup;
  projectList: any = [];
  constructor(private fb: FormBuilder,
    private projectDashboardService: ProjectDashboardService
  ) {
    this.form = this.fb.group({
      projectname: ['', Validators.required],
      projectImage: ['', Validators.required],
      projectDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.projectDashboardService.createProject(this.form.value).subscribe(res=>{
        console.log(res);
      });
    }
  }


  getProjects(){
    this.projectDashboardService.getAllProjects().subscribe(res=>{
      this.projectList = res;
    });
  }

}
