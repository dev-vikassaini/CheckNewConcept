import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular13NewFutureComponent } from './angular13-new-future.component';

describe('Angular13NewFutureComponent', () => {
  let component: Angular13NewFutureComponent;
  let fixture: ComponentFixture<Angular13NewFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular13NewFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular13NewFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
