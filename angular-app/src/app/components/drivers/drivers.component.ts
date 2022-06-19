import {Component, OnDestroy, OnInit} from '@angular/core';
import {DriverService} from "../../services/driver/driver.service";
import {Observable, Subscription} from "rxjs";
import {IDriver} from "../../interfaces/driver/IDriver";
import {PageEvent} from "@angular/material/paginator";
import {environment} from "../../../environments/environment";
import {IPaginate} from "../../interfaces/pagination/IPaginate";
import {TimeInterval} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit, OnDestroy {

  drivers: IDriver[];
  pagination: IPaginate;
  connectionError: boolean;
  updateChanges: boolean;
  interval: any;

  constructor(private driverService: DriverService) {
    this.drivers = [] as IDriver[];
    this.pagination = {
      length: environment.pagination.length,
      pageSize: environment.pagination.pageSize,
      pageSizeOptions: environment.pagination.pageSizeOptions,
      pageIndex: environment.pagination.pageIndex
    };
    this.connectionError = true;
    this.updateChanges = false;
  }

  ngOnInit(): void {
    this.interval = this.updateLocations(this.pagination);
    this.getDrivers(this.pagination);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  _driverObservable$(pagination: IPaginate) {
    return this.driverService.getAll(pagination);
  }

  getDrivers(pagination: IPaginate) {
    let driversSub: Subscription = this._driverObservable$(pagination).subscribe(
      res => {
        this.drivers = res.data;
        this.pagination.length = res.metadata.pagination.total;
        this.connectionError = false;
      },
      error => {console.log(error); this.connectionError = true},
      () => {
        driversSub.unsubscribe();
        this.updateChanges=false;
      }
      )
  }

  handlePageEvent(event: PageEvent) {
    this.pagination.pageSize = event.pageSize;
    this.pagination.pageIndex = event.pageIndex;
    this.getDrivers(this.pagination);
  }

  updateLocations(pagination: IPaginate) {
    return setInterval(()=> {
        this.updateChanges = true;
      this.getDrivers(pagination);
    }, 5000);
  }
}
