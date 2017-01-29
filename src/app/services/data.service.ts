import { Injectable } from '@angular/core';
import {Item} from "../models/item.model";

const ITEMS:Item[] = [
  {
    name: 'Another brick in the wall',
    artist: 'Pink Floyd'
  },
  {
    name: 'People are strange',
    artist: 'The Doors'
  }
];

@Injectable()
export class DataService {

  constructor() {
    }

    getItems():Item[]{
      return ITEMS;
    }
  }


