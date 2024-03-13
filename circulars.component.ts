/*import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';*/
/*import { UserService } from 'src/app/service/user.service';?*/

/*@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css']
})
export class CircularsComponent {
  constructor(private userService:UserService){}
  displayedColumns = ['circulartitle', 'circulardate', 'description', 'download',];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  color='#0d304f'

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void { 
     this.circulars()
}

circulars() {
  
 
  this.userService.circular().subscribe(res => {
    if (res.status == 200) {
      console.log(res);
      
    }
  }
  );
}

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
/*}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [

];*/

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
//import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css']
})
export class CircularsComponent {
  constructor(private userService:UserService){}
  displayedColumns = ['circulartitle', 'circulardate', 'description', 'download',];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  color='#0d304f'

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void { 
     this.circulars()
}

circulars() {
  
 
  this.userService.circular().subscribe(res => {
    if (res.status == 200) {
      console.log(res);
      
    }
  }
  );
}

pdf(){
  window.open('https://www.africau.edu/images/default/sample.pdf')
}
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [

];



















