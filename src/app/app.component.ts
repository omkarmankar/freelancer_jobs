import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValidationPipe } from './shared/pipes/validation.pipe';
import { orderStatus } from './core/enum/enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ValidationPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'freelancer';
  orderObj:any = {
    status:""
  }

  constructor(){
    this.orderObj.status = orderStatus.new;
  }
}
