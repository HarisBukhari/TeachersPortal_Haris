import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  countries: string[] = ['Pakistan', 'Dubai', 'UAE'] 
  constructor() { }

  ngOnInit(): void {
  }
  UserForm = new FormGroup({
    FirstName: new FormControl('',Validators.required),
    Family: new FormControl('',Validators.required),
    Password: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Country: new FormControl('',Validators.required),
    RememberMe: new FormControl(''),
    Gender: new FormControl('',Validators.required),
  });
  SubmitForm(){
    console.log(this.UserForm.value)
  }

}
