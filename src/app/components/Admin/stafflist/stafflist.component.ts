import { Component, OnInit } from '@angular/core';
import { faCoffee,faHouse,faCirclePlus,faFolder,faFileLines,faClock, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {
  items:any=[1,2,3,4,5,6,7,8,9,86,6,5,8,4,4,4,3,2]
  faHouse=faHouse;
  faCirclePlus=faCirclePlus;
  faFolder=faFolder;
  faFileLines=faFileLines;
  faClock=faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
