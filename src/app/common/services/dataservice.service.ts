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
  hospitalBaseUrl = this.baseUrl + 'Hospital';
  specialityBaseUrl = this.baseUrl + 'Speciality'

  constructor(private _httpClient: HttpClient) { }


  GetDoctors(): Observable<Dropdown[]> {

    const url = this.doctorBaseUrl;

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetDoctorsBySpeciality(specialityID: number): Observable<Dropdown[]> {

    const url = this.doctorBaseUrl + '/speciality/' + String(specialityID);

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetDoctorsByHospital(hospitalID: number): Observable<Dropdown[]> {

    const url = this.doctorBaseUrl + '/hospital/' + String(hospitalID);

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetHospitals(): Observable<Dropdown[]> {

    const url = this.hospitalBaseUrl;

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetSpecialities(): Observable<Dropdown[]> {

    return this._httpClient.get<Dropdown[]>(this.specialityBaseUrl);

  }

  GetSpecialityById(specialityID: number): Observable<Dropdown[]> {

    const url = this.specialityBaseUrl + '/' + String(specialityID);

    return this._httpClient.get<Dropdown[]>(url);
  }

  GetDoctorsForSpecialityById(specialityID: number): Observable<Dropdown[]> {

    const url = this.specialityBaseUrl + '/' + String(specialityID) + '/doctor';

    return this._httpClient.get<Dropdown[]>(url); 
  }

  GetHospitalsForSpecialityById(specialityID: number): Observable<Dropdown[]> {

    const url = this.specialityBaseUrl + '/' + String(specialityID) + '/hospital';

    return this._httpClient.get<Dropdown[]>(url);
  }








}
