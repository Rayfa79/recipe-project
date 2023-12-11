import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  

  ingredients: Ingredient[]  = [
    new Ingredient('hamburger buns', 10),
    new Ingredient('mild cheddar cheese slices', 20),
    new Ingredient('ground turkey', 15)


  ]

  ngOnInit(): void {

  }

  onIngredientsSelected(ingredient: Ingredient) {
    
    this.ingredients.push(ingredient)
    console.log(this.ingredients)
  }

}
