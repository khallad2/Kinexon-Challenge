import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IDriver} from "../../../interfaces/driver/IDriver";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, OnChanges, DoCheck {
  @Input() driver: IDriver;
  @Input() updateChanges: boolean;
  constructor() {
    this.driver = {id: 0, carMake: '', driverCityOrigin: '', driverGender: '', driverInfo: '',
      driverLanguage: '', driverName: '', driverPhone: '',
      kmDriven: 0, location: [0, 0] } as IDriver;
    this.updateChanges = true;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateChanges = changes.updateChanges.currentValue;
  }

  ngDoCheck() {

  }

}
