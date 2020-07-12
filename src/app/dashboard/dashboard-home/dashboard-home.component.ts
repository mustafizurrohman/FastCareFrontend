import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './../../common/services/dataservice.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private _dataService: DataserviceService) { }

  ngOnInit(): void {

    this._dataService.GetDoctors().subscribe(console.log);
    this._dataService.GetDoctorsBySpeciality(8).subscribe(console.log);

  }

}
