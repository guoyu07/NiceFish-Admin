import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FormControlComponent } from './user-profile/dynamic-form/form-control.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserTableComponent,
    FormControlComponent
  ]
})
export class UserModule { }
