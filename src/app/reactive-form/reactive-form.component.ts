import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    name = new FormControl('');

    // function - show name
    showName(){
      //set value
      this.name.setValue('Auston Zhang');
    }

}
