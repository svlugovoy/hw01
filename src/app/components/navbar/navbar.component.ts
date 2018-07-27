import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName = 'HW01';
  studentName = 'Serhii Luhovyi';

  constructor() { }

  ngOnInit() {
  }

}
