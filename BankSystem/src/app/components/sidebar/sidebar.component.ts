import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from '../../../interfaces/MenuItem'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  menuItems!: MenuItem[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
