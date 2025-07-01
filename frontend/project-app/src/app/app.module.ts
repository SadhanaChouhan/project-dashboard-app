import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/home-page/about-us/about-us.component';
import { ProjectsComponent } from './components/home-page/projects/projects.component';
import { ClientsComponent } from './components/home-page/clients/clients.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { WhyUsComponent } from './components/home-page/why-us/why-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDashboardService } from './service/project-dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/home-page/header/header.component';
import { CreateProjectComponent } from './components/home-page/create-project/create-project.component';
import { CreateClientComponent } from './components/home-page/create-client/create-client.component';
import { ContactComponent } from './components/home-page/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ProjectsComponent,
    ClientsComponent,
    FooterComponent,
    WhyUsComponent,
    CreateProjectComponent,
    HeaderComponent,
    CreateClientComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [
    // provideClientHydration(withEventReplay())
    ProjectDashboardService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
