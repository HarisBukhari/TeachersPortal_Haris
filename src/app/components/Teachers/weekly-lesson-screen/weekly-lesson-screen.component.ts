import { Component, OnInit } from '@angular/core';

import { faHouse,faFolder, faCirclePlus,faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-weekly-lesson-screen',
  templateUrl: './weekly-lesson-screen.component.html',
  styleUrls: ['./weekly-lesson-screen.component.css']
})
export class WeeklyLessonScreenComponent implements OnInit {
  faHouse=faHouse;
  faCirclePlus=faCirclePlus;
  faFileArrowDown=faFileArrowDown;
  faFolder=faFolder;
 
  constructor() { }

  ngOnInit(): void {
  }

}
