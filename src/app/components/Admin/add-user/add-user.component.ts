import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UserForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Role: new FormControl('',Validators.required),
  });
  SubmitForm(){
    console.log(this.SubmitForm)
  }
}
