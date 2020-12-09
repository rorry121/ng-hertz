import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-hertz-doc';

  ngOnInit() {
    const theme = localStorage.getItem('ng-hertz-doc-theme') || 'light';
    document.documentElement.setAttribute('theme', theme);
  }
}
