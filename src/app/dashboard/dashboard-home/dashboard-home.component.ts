import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './../../common/services/dataservice.service';
import { Dropdown } from 'src/app/common/models/dropdown';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  hospitals: Dropdown[] = [];

  constructor(private _dataService: DataserviceService) { }

  ngOnInit(): void {

    this._dataService.GetHospitals()
      .subscribe((hos: Dropdown[]) => {
        this.hospitals = hos;
      });

  }

}
