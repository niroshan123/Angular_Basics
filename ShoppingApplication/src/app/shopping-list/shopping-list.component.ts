import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingrediance} from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediance: Ingrediance[] = [
    new Ingrediance ('Apple', 5),
    new Ingrediance('Banana', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
