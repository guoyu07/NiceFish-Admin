import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { orgRoutes } from './org.routes';
import { OrgMngComponent } from './org-mng/org-mng.component';
import { OrgComponent } from './org.component';
import { RdkBlockModule, RdkButtonModule } from '@rdkmaster/jigsaw';

@NgModule({
  imports: [
    RdkBlockModule,
    RdkButtonModule,
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(orgRoutes)
  ],
  declarations: [
    OrgComponent,
    OrgMngComponent
  ]
})
export class OrgModule { }
