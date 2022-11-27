import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-push-sample',
  templateUrl: './on-push-sample.component.html',
  styleUrls: ['./on-push-sample.component.css']
})
export class OnPushSampleComponent implements OnInit {
  value: string = "Old Value";
  constructor(private _changeDetector: ChangeDetectorRef) {
    setTimeout(() => {
      debugger;
      this.value = "new value";
      this._changeDetector.markForCheck();
    }, 5000)
  }

  ngOnInit(): void {
  }

}
