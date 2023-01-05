import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  coursToggle: Boolean = false;
  profToggle: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickCours() {
    this.coursToggle = !this.coursToggle;
  }

  onClickProf() {
    this.profToggle = !this.profToggle;
  }
}
