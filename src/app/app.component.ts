import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  serverName = "";
  isOnline = false;
  serverCreated : boolean;
  buttonClicks: number[];
  increment = 0;
  loadedPage = 'recipes';

  //1. User imputs server name in input field
  //2. 2 way data binding/or one way data binding is used to grab the input value
  //button has method that once clicked will PUSH servername to an array property
  //We will then use PROPERTY BINDING to add the array to the template
  //Will will an ngFor loop to loop throught the array and add the properties

  constructor(){
    this.buttonClicks = []
    setTimeout(()=>{
      this.isOnline = true;
    },8000)

  }


  onSubmit() {
    this.serverCreated = true;
    this.increment ++
    this.buttonClicks.push(this.increment)
    console.log(this.buttonClicks)



  }

  getColor() {
    return  Math.random() > 0.5 ? "red" : "black"
  }

  getNewColor() {
    this.increment >= 5 ? 'blue' : "pink"

  }

  onSelectedPage(pageSelected: string) {
    this.loadedPage = pageSelected;
    console.log(this.loadedPage)
  }

  ngOnInit(): void {

  }

}
