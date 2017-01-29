import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:Item [];

  constructor(private ds:DataService) {
  }

  ngOnInit() {
    this.items = this.ds.getItems();
  }

}
