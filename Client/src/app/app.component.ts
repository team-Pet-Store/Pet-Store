import { Component } from '@angular/core';
import { GeneralService } from './service/genral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private GeneralService : GeneralService ){
  }
  title = 'Client';
}
