import { Component, OnInit, ViewChild,AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {Home} from '../home.model';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busrecord',
  templateUrl: './busrecord.component.html',
  styleUrls: ['./busrecord.component.css']
})
export class BusrecordComponent implements OnInit,AfterViewInit, OnDestroy  {
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  private exChangedSubscription: Subscription;

  displayedColumns=['date','busid','intime','outtime'];
  dataSource= new  MatTableDataSource<Home>();

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.exChangedSubscription =this.homeService.finishedRecordChanged.subscribe((records:Home[])=>{
      this.dataSource.data=records;
    });
    this.homeService.fetchRecords();
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  doFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.exChangedSubscription.unsubscribe();
  }
}
