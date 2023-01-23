import { Component } from '@angular/core';

export type SectionType = 'list'|'experiments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section: SectionType = 'list';
  title = 'Test-Auston';

  get showListSection(){
    return this.section ==='list';
  }

  get showExperimentSection(){
    return this.section ==='experiments';
  }

  toggleSection(type: SectionType){
    this.section = type;
  }

}
