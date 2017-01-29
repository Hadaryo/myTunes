import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../../models/item.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
