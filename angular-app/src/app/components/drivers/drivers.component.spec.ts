import {ComponentFixture, TestBed} from '@angular/core/testing';
import { DriversComponent } from './drivers.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {IPaginate} from "../../interfaces/pagination/IPaginate";
import {environment} from "../../../environments/environment";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "../../app-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DriverService} from "../../services/driver/driver.service";
import {of} from "rxjs";


describe('DriverComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;
  let pagination: IPaginate = {
      length: environment.pagination.length,
      pageSize: environment.pagination.pageSize,
      pageSizeOptions: environment.pagination.pageSizeOptions,
      pageIndex: environment.pagination.pageIndex
  };
  let driverService: any;

  beforeEach( async () => {
     await TestBed.configureTestingModule({
      declarations: [ DriversComponent ],
      imports: [
        HttpClientTestingModule,
        MatProgressBarModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        AppRoutingModule
      ],
      providers: [
         DriverService
      ],
    })
    .compileComponents();
  });

  beforeEach( () => {
     driverService = { getAll: () => of([]) };
     fixture =  TestBed.createComponent(DriversComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', async () => {
    await component.ngOnInit();
    await expect(component.drivers).not.toBe([]);
  });


});
