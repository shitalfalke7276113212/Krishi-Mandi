import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-nafedpsfauctionfloor',
  templateUrl: './nafedpsfauctionfloor.component.html',
  styleUrls: ['./nafedpsfauctionfloor.component.css']
})
export class NafedpsfauctionfloorComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol','time','offqty','baseprice','bidprice','bid','lastqty','allocation','timeleft','ext','price','qty','message'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [

];





