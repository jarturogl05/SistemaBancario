import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.css'],
})
export class ManagerSidebarComponent implements OnInit {


  menuItems = [
    { text: 'Clients', src: '/Clients' },
    { text: 'Reports', src: '/Reports' },
    { text: 'Config', src: '/Config' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
