import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-server',
  templateUrl: './recipe-server.component.html',
  styleUrls: ['./recipe-server.component.css']
})
export class RecipeServerComponent {
  @Input() server: {type: string, name: string, content: string}

}
