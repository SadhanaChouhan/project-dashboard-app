import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIURLCONSTANT } from '../constant/api-url.constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectDashboardService {
  baseUrl = "http://localhost:8081";

  constructor(private http: HttpClient,) { }

  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + APIURLCONSTANT.GET_PROJECTS);
  }

  createProject(data: any): Observable<any> {
    return this.http.post(this.baseUrl + APIURLCONSTANT.CREATE_PROJECT, data);
  }

   getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + APIURLCONSTANT.GET_CLIENTS);
  }

  createClient(data: any): Observable<any> {
    return this.http.post(this.baseUrl + APIURLCONSTANT.CREATE_CLIENT, data);
  }

    getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + APIURLCONSTANT.GET_CONTACT);
  }

  createContact(data: any): Observable<any> {
    return this.http.post(this.baseUrl + APIURLCONSTANT.CREATE_CONTACT, data);
  }
}
