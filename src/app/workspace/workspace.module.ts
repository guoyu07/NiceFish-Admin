import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';

import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { PostTableComponent } from '../post/post-table/post-table.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { CommentTableComponent } from '../comment-table/comment-table.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { FormControlComponent } from '../user/user-profile/dynamic-form/form-control.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { RoleTableComponent } from '../role/role-table/role-table.component';
import { PermissionTableComponent } from '../permission/permission-table/permission-table.component';
import { SysMonitorComponent } from '../sys/sys-monitor/sys-monitor.component';
import { WorkspaceComponent } from './workspace.component';

import { EChartOptionDirective1 } from '../sys/sys-monitor/echart-option.directive';
import { PostTableService } from '../post/post-table/services/post-table.service';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        SharedModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        EChartOptionDirective1,
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterInfoComponent,
        PostTableComponent,
        WritePostComponent,
        CommentTableComponent,
        UserTableComponent,
        FormControlComponent,
        UserProfileComponent,
        RoleTableComponent,
        PermissionTableComponent,
        SysMonitorComponent
    ],
    providers: [
	    PostTableService
    ],
})
export class WorkspaceModule { }
