import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'doc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  list = routes[0].children;
  constructor() {}

  ngOnInit() {}
}
