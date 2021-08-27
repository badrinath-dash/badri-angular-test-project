import { Component } from '@angular/core';

export class User {
  public name: string;
  public description: string;
  public email: string;
  public password: string;
  public index_type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  model = new User();

  
  index_types = ['Event', 'Metrics','Summary', 'Summary Metrics'];

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  constructor() {}

  onSubmit(form) {
    console.log(form.value);
  }
}
