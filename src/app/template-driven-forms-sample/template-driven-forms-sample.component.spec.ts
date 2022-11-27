import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsSampleComponent } from './template-driven-forms-sample.component';

describe('TemplateDrivenFormsSampleComponent', () => {
  let component: TemplateDrivenFormsSampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
