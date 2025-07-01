import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router:Router,private dialog:MatDialog){}

  navigateTo(path:any){
    this.router.navigate([path])
  }

  //   openProjectDialog(){
  //   const dialogRef = this.dialog.open(CreateProjectComponent,{
  //     width:"500px",
  //     disableClose:true,
  //     autoFocus : true,
  //   });
   
  // }
}
