import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverComponent } from './driver.component';
import {AppComponent} from "../../../app.component";
import {MatSpinner} from "@angular/material/progress-spinner";
import {MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverComponent, MatSpinner,
        MatCardActions, MatDivider, MatCardContent, MatCardTitle, MatCardSubtitle ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init driver', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.driver['id']).toBe(0);
  });

});

