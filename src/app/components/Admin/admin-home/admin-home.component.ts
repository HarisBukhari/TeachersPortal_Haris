import { Component, OnInit } from '@angular/core';
import { faCoffee,faHouse,faCirclePlus,faFolder,faFileLines,faClock, } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
 items:any=[1,2,3,4,5,6,7,8,9,86,6,5,8,4,4,4,3,2]
  constructor() { }
  faHouse=faHouse;
  faCirclePlus=faCirclePlus;
  faFolder=faFolder;
  faFileLines=faFileLines;
  faClock=faClock;

  
  

  ngOnInit(): void {
  }

}
