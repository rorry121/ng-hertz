```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-button-circle',
  template: `
    <div class="mb-16">
      <button hz-button hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="success" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="warning" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="danger" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="outline" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="text" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="link" hzShape="circle"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="action" hzShape="circle"><i hz-icon hzName="edit"></i></button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="success" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="warning" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="danger" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="outline" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="text" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="link" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="action" hzShape="circle" hzSize="s"><i hz-icon hzName="edit"></i></button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="success" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="warning" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="danger" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="outline" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="text" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="link" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="action" hzShape="circle" hzSize="m"><i hz-icon hzName="edit"></i></button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="success" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="warning" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="danger" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="outline" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="text" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="link" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
      <button hz-button hzType="action" hzShape="circle" hzSize="l"><i hz-icon hzName="edit"></i></button>
    </div>
  `,
  styles: [`
    [hzShape="circle"] {
      margin-right: 16px;
    }
    .mb-16 {
      margin-bottom: 16px;
    }
  `]
})
export class HzDemoButtonCircle implements OnInit {
  constructor() {}

  ngOnInit() {}
}

```