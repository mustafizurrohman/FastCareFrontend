import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Dropdown } from './../models/dropdown';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  baseUrl = environment.baseUrl;

  doctorBaseUrl = this.baseUrl + 'Doctor';

  constructor(private _httpClient: HttpClient) { }


  GetDoctors(): Observable<Dropdown[]> {

    const url = this.doctorBaseUrl;

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetDoctorsBySpeciality(specialityID: number): Observable<Dropdown[]> {

    const url = this.doctorBaseUrl + '/speciality/' + String(specialityID);

    return this._httpClient.get<Dropdown[]>(url);
  }



}
