import { Component } from '@angular/core';
import sampleData from './sampleData.json';

interface User{
  id:Number;
  name:String;
  description:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users: User[] = sampleData;
}
