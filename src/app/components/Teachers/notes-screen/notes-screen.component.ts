import { Component, OnInit } from '@angular/core';
import { faHouse,faFileLines,faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes-screen',
  templateUrl: './notes-screen.component.html',
  styleUrls: ['./notes-screen.component.css']
})
export class NotesScreenComponent implements OnInit {
  faHouse=faHouse;
  faFileLines=faFileLines;
  faFileArrowDown=faFileArrowDown;
  constructor() { }

  ngOnInit(): void {
  }

}
