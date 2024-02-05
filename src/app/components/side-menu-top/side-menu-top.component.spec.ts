import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuTopComponent } from './side-menu-top.component';

describe('SideMenuTopComponent', () => {
  let component: SideMenuTopComponent;
  let fixture: ComponentFixture<SideMenuTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
