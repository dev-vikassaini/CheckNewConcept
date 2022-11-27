import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushSampleComponent } from './on-push-sample.component';

describe('OnPushSampleComponent', () => {
  let component: OnPushSampleComponent;
  let fixture: ComponentFixture<OnPushSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPushSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
