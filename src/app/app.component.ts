import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'todo-list';
  constructor(){
  //   setTimeout(()=> {
  //   this.title= "Lavnish"
  //   },3000);
  }
}
