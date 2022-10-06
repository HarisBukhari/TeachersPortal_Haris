import { Component, OnInit } from '@angular/core';
import { faCirclePlus,faHouse,faFileArrowDown,faFolder,faFileLines,faClock, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  items:any=[1,2,3,4,5,6,7]
  faCirclePlus= faCirclePlus;
  faHouse=faHouse;
  faFileArrowDown=faFileArrowDown;
  faFolder=faFolder;
  faFileLines=faFileLines;
  faClock=faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
