import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['value'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChildComponent),
    multi: true
  }]
})
export class ChildComponent implements OnInit {
  public value: any;
  constructor() { }

  ngOnInit(): void {
  }
  public onChange: (_: any) => void = (_: any) => {
    // do nothing
  };
  public onTouched: () => void = () => {
    // do nothing
  };
  public writeValue(value: any): void {
    this.value = value;
  }
  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public click(): void {
    this.value = "Child New Value";
  }
}
