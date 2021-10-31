import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.tbl.html',
  styleUrls: ['./app.component.tbl.css']
})

export class AppComponent implements OnInit{

  dataSource!: MatTableDataSource<Item>;
  items!: Item[];
  columns: string[] = ['id', 'title', 'feedDescription', 'updatedDate'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private itemService: ItemService){}

  ngOnInit(){
       this.itemService.getItems().subscribe(
        (response: Item[]) =>{
          this.items = response;
          this.dataSource = new MatTableDataSource(this.items);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message)
        }
    )
    
  }


}
