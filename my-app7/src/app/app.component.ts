import { Component } from '@angular/core';

const num = 7;

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app7';

  sayHello(): void{
    const x = 10;
  }
}
