import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateProjectComponent } from './components/home-page/create-project/create-project.component';
import { CreateClientComponent } from './components/home-page/create-client/create-client.component';
import { ContactComponent } from './components/home-page/contact/contact.component';

const routes: Routes = [  
  {path: "", component:HomePageComponent},
  { path: 'projects', component: CreateProjectComponent },
{path: 'clients', component: CreateClientComponent},
{path: 'contacts', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

 

}
