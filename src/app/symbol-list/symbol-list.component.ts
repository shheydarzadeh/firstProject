import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ListService } from '../list.service';
import { ActivatedRoute , Router} from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface SymbolInterface {
  Id: number;
  Name: string;
  Title: string;
  InsCode: string;
}
@Component({
  selector: 'all-list',
  templateUrl: './symbol-list.component.html',
})


export class SymbolListComponent implements OnInit, AfterViewInit {
  selection = new SelectionModel<any>(true, []);
 // displayedColumns: string[] = [ 'select', 'id', 'name', 'title', 'insCode', 'goDetaile'];
  displayedColumns: string[] = [ 'select', 'Id', 'Name', 'Title', 'InsCode', 'goDetaile'];
  showFiller = false;
  myList: any = [];
  ELEMENT_DATA_test: SymbolInterface[] = [] ;
  chosedItem: number[] = [];
  is_open: boolean;
  showMain: boolean;
  myDetaileList: any = [];
  myCopmareList: any = [];
  titleFilter: any = { Title: '' };
  nameFilter: any = { Name: '' };
  public dataSource: any;
  @ViewChild('modal') _myModal: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private filterPipe: FilterPipe, public listService: ListService, private route: ActivatedRoute, private router: Router) {
    this.is_open = false;
    this.showMain = true;

  }

  ngOnInit() {
    if (this.myList.length === 0) {
      this.listService.list().subscribe((data: {}) => {
        console.log(data);
        this.myList = data;
        console.log(this.ELEMENT_DATA_test.length);
        for (let i = 0; i < this.myList.length; i++) { this.ELEMENT_DATA_test.push({Id: this.myList[i].Id, Name: this.myList[i].Name, Title: this.myList[i].Title, InsCode: this.myList[i].InsCode}); }
       // console.log(this.ELEMENT_DATA_test);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA_test);
        this.dataSource.sort = this.sort;
        //console.log(this.dataSource.sort );
        this.dataSource.paginator = this.paginator;

      });
    }
  }
  setForCheck($event, id: number) {
    console.log($event.checked);
    if ( $event.checked === true) {
      this.chosedItem.push(id);
    } else {
      // remove from chosedItem
      const index = this.chosedItem.indexOf(id, 0);
      if (index > -1) {
        this.chosedItem.splice(index, 1);
      }
    }
    console.log(this.chosedItem);
  }
  textInput() {
    this.nameFilter.Name = this.titleFilter.Title;
    // console.log(this.nameFilter);
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // console.log(this.dataSource.sort);
  }
  ssort() {
    alert('unavailable');

  }
  wichContent() {
    if (this.showMain === true) {
      this.showMain = false;
    } else {
      this.showMain = true;
    }
  }
  closeSidenav() {
    this.is_open = false;
  }
  showDetaile(id: number ) {
    this.is_open = true;
    this.myDetaileList = [];
    this.listService.get_detailes(id).subscribe((data: {}) => {
      console.log(data);
      this.myDetaileList = data;
    });
  }
  showCompare() {
    if (this.chosedItem.length <= 1) {
      alert('لطفا حداقل دو مورد را انتخاب کنید!');
    } else {
      this.myCopmareList = [];
      for (let i = 0; i < this.chosedItem.length; i++) {
        this.listService.get_detailes(this.chosedItem[i]).subscribe((data: {}) => {
          console.log(data);
          this.myCopmareList.push(data);

        });
      }
      console.log(this.myCopmareList);

        this._myModal.nativeElement.style.display = 'block';
    }

  }
  closeModal() {
    this._myModal.nativeElement.style.display = 'none';
  }
  go_compare() {
      if (this.chosedItem.length <= 1) {
        alert('لطفا حداقل دو مورد را انتخاب کنید!');
      } else {
        this.router.navigateByUrl('Compaire');
      }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setSort() {
    console.log('call sort');
    this.sort.sort({id: 'insCode', start: 'asc', disableClear: false});
  }

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   // if there is a selection then clear that selection
  //   if (this.isSomeSelected()) {
  //     this.selection.clear();
  //   } else {
  //     this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  //   }
  // }

  // isSomeSelected() {
  //   return this.selection.selected.length > 0;
  // }


}
