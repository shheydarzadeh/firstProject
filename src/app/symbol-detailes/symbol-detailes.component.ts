import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ListService } from '../list.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './symbol-detailes.component.html',
  styleUrls: ['./symbol-detailes.component.css']
})
export class SymbolDetailesComponent implements OnInit {


  myList: any = [];
  constructor(private listService: ListService, private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.listService.get_detailes(id).subscribe((data: {}) => {
      console.log(data);
      this.myList = data;
    });

  }

  back() {
    this._location.back();
  }
}
