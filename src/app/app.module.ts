import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from '../app/components/Admin/add-user/add-user.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';

import { StafflistComponent } from './components/Admin/stafflist/stafflist.component';
import { StudentListComponent } from './components/Teachers/student-list/student-list.component';
import { StudentProfileComponent } from './components/Students/student-profile/student-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectTemplateComponent } from './components/Admin/select-template/select-template.component';
import { AddTeacherComponent } from './components/Teachers/add-teacher/add-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    AdminHomeComponent,
    StafflistComponent,
    StudentListComponent,
    StudentProfileComponent,
    SelectTemplateComponent,
    AddTeacherComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
