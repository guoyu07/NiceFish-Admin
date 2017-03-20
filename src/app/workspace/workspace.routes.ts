import { RouterModule } from '@angular/router';
import { PostTableComponent } from '../post-table/post-table.component';
import { CommentTableComponent } from '../comment-table/comment-table.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { RoleTableComponent } from '../role/role-table/role-table.component';
import { PermissionTableComponent } from '../permission/permission-table/permission-table.component';
import { SysMonitorComponent } from '../sys/sys-monitor/sys-monitor.component';
import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes=[
	{
        path:'',
        component:WorkspaceComponent,
        children: [
	    	{ path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'posttable/page/:page', component: PostTableComponent },
	    	{ path: 'commenttable/page/:page', component: CommentTableComponent },
	    	{ path: 'usertable/page/:page', component: UserTableComponent },
	    	{ path: 'roletable/page/:page', component: RoleTableComponent },
	    	{ path: 'permissiontable/page/:page', component: PermissionTableComponent },
	    	{ path: 'sysmonitor', component: SysMonitorComponent }
	    ]
    }
];