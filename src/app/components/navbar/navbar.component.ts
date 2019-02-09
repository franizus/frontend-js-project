import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  isLogedin: boolean;

  @Input()
  nombreUsuario: string;

  @Output()
  dioClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  logout() {
    this.dioClick.emit(true);
  }
}
