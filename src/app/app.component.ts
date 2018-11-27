import { Component } from '@angular/core';
// import {PublicListValue} from './public-list-value';
// import { ListService } from './list.service';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
//   constructor (public listService: ListService) {
//   this.listService.list().subscribe((data: {}) => {
//   //console.log(data);
//    // console.log(PublicListValue.mypublcList);
//     PublicListValue.mypublcList = data;
//     console.log('puuuuuubliiic' + PublicListValue.mypublcList);
//   // this.myList = data;
//   // // this.dataSource = data;
//   // // this.dataSource = new MatTableDataSource[data];
//   // this.dataSource = new MatTableDataSource(this.myList);
//   // this.dataSource.paginator = this.paginator;
// });
// }
}
