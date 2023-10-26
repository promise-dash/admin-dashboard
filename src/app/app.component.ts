import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'adminkit';
  ngAfterViewInit() {
    feather.replace();
  }

  
}
