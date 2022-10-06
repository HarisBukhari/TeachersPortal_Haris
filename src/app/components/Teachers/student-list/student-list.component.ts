import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass,faFileArrowDown,faFolder,faFileLines,faClock, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  items:any=[1,2,3,4,5,6,7,8,9,86,6,5,8,4,4,4,3,2]
  faMagnifyingGlass=faMagnifyingGlass
  faClock=faClock
  

  constructor() { }

  ngOnInit(): void {
  }

}
