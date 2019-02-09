import { AuthService } from './../../../services/rest/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-route',
  templateUrl: './inicio-route.component.html',
  styleUrls: ['./inicio-route.component.css']
})
export class InicioRouteComponent implements OnInit {
  constructor(private readonly _authService: AuthService) {}

  ngOnInit() {}

  isLogedin(): boolean {
    return this._authService.usuario != undefined;
  }
}
