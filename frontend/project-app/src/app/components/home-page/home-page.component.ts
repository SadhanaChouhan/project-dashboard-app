import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectDashboardService } from '../../service/project-dashboard.service';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
form: FormGroup;
contactList: any=[];
   constructor(private fb: FormBuilder,
    private projectDashboardService: ProjectDashboardService
  ) {
    this.form = this.fb.group({
     fullName: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getContact();
  }
    onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.projectDashboardService.createContact(this.form.value).subscribe(res=>{
        console.log(res);
      });
    }
  }

  getContact(){
    this.projectDashboardService.getAllContacts().subscribe(res=>{
      this.contactList = res;
    });
  }
}
