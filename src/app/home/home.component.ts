import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected message: string = 'Bind to protected component members';
  constructor() { }

  ngOnInit(): void {
  }

}
