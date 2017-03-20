import { RouterModule } from '@angular/router';
import { PostTableComponent } from '../post-table/post-table.component';
import { CommentTableComponent } from '../comment-table/comment-table.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes=[
	{
        path:'',
        component:WorkspaceComponent,
        children: [
	    	{ path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'posttable/page/:page', component: PostTableComponent },
	    	{ path: 'commenttable/page/:page', component: CommentTableComponent },
	    	{ path: 'usertable/page/:page', component: UserTableComponent }
	    ]
    }
];