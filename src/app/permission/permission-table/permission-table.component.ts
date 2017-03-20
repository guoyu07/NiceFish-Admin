import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'permission-table',
  templateUrl: './permission-table.component.html',
  styleUrls: ['./permission-table.component.scss'],
  animations: [
    flyIn
  ]
})
export class PermissionTableComponent implements OnInit {
	  public maxSize:number = 5;
    public itemsPerPage:number=5;
    public totalItems:number = 15;
    public currentPage:number = 1;
  constructor() { }

  ngOnInit() {
  }

}
