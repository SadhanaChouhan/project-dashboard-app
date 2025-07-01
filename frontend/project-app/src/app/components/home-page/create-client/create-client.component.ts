import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectDashboardService } from '../../../service/project-dashboard.service';

@Component({
  selector: 'app-create-client',
  standalone: false,
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent implements OnInit {

  
  form: FormGroup;
  clientList: any = [];
  constructor(private fb: FormBuilder,
    private projectDashboardService: ProjectDashboardService
  ) {
    this.form = this.fb.group({
     name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
    designation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getClients();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.projectDashboardService.createClient(this.form.value).subscribe(res=>{
        console.log(res);
      });
    }
  }

getClients(){
    this.projectDashboardService.getAllClients().subscribe(res=>{
      this.clientList = res;
    });
  }
}
