import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from '../app/components/Admin/add-user/add-user.component';
import { AdminHomeComponent } from './components/Admin/admin-home/admin-home.component';

import { StafflistComponent } from './components/Admin/stafflist/stafflist.component';
import { StudentListComponent } from './components/Teachers/student-list/student-list.component';
import { StudentProfileComponent } from './components/Students/student-profile/student-profile.component';
import { SelectTemplateComponent } from './components/Admin/select-template/select-template.component';
import { AddTeacherComponent } from './components/Teachers/add-teacher/add-teacher.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'AddUser', component: AddUserComponent },
  { path: 'UserAdmin', component: AdminHomeComponent },
  { path: 'stafflist', component: StafflistComponent },
  { path: 'studentlist', component: StudentListComponent },
  { path: 'studentprofile', component: StudentProfileComponent },
  { path: 'selecttemplate', component: SelectTemplateComponent },
  { path: 'addteacher', component: AddTeacherComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
