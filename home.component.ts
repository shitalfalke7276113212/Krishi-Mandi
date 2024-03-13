import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { UserService } from '../services/user.service';

type AOA = any[][]; @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService) { }




  date1 = new Date();


  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();
  //dd/mm/yyyy
  TodayDate = "2023-07-29";


  FinalMonth: any;
  FinalDay: any;




  ngOnInit(): void {
    this.auction()

    if (this.currentMonth < 10) {
      this.FinalMonth = "0" + this.currentMonth;
    } else {
      this.FinalMonth = "0" + this.currentMonth;
    }




    if (this.currentDay < 10) {
      this.FinalDay = "0" + this.currentDay;
    } else {
      this.FinalDay = "0" + this.currentDay;
    }
    this.TodayDate = this.currentYear + "-" +
      this.FinalMonth.slice(+1) + "-" + this.FinalDay.slice(-2);


  }

  auction() {

    let form =
    {
      "SelectedDate": '2023-10-16'

    }
    this.userService.signup(form).subscribe(res => {
      if (res.status == 200) {
        console.log(res);

      }
    }
    );
  }
  data: AOA = [[1, 2], [3, 4]];
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

  /*------------------------tables data--------------------------------*/


  displayedColumns = ['date', 'season', 'state', 'commodity', 'minprice', 'maxprice',];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  color = '#0d304f'

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



function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

