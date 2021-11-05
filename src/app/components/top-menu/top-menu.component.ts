import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {
  myDate = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

}
