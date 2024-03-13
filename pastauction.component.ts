import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-pastauction',
  templateUrl: './pastauction.component.html',
  styleUrls: ['./pastauction.component.css']
})
export class PastauctionComponent {

  displayedColumns = ['auctiontype', 'commodity', 'seller', 'location','from','to','tradequality', 'tradeprice' , 'low',];

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  color='#0d304f'

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */


  data
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }


  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

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



