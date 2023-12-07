import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static: true}) nameInput : ElementRef;
  @ViewChild('amountInput',{static: true}) amountInput : ElementRef;

  @Output() ingredientsSelected = new EventEmitter<Ingredient>();




  onAddIngredients() {
    const nameRef = this.nameInput.nativeElement.value;
    const amountRef = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameRef, amountRef)
    this.ingredientsSelected.emit(newIngredient)
  }

}
