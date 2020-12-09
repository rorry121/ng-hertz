```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-button-basic',
  template: `
    <div class="mb-16">
      <button hz-button>Primary</button>
      <button hz-button hzType="success">Success</button>
      <button hz-button hzType="warning">Warning</button>
      <button hz-button hzType="danger">Danger</button>
      <button hz-button hzType="outline">Outline</button>
      <button hz-button hzType="text">Text</button>
      <button hz-button hzType="link">Link</button>
      <button hz-button hzType="action"><i hz-icon hzName="rule-add"></i><span>Action</span></button>
    </div>
    <div class="mb-16">
      <button hz-button disabled>Primary</button>
      <button hz-button hzType="success" disabled>Success</button>
      <button hz-button hzType="warning" disabled>Warning</button>
      <button hz-button hzType="danger" disabled>Danger</button>
      <button hz-button hzType="outline" disabled>Outline</button>
      <button hz-button hzType="text" disabled>Text</button>
      <button hz-button hzType="link" disabled>Link</button>
      <button hz-button hzType="action" disabled><i hz-icon hzName="rule-add"></i><span>Action</span></button>
    </div>
  `,
  styles: [`
    [hz-button] {
      margin-right: 16px;
    }
    .mb-16 {
      margin-bottom: 16px;
    }
  `]
})
export class HzDemoButtonBasic implements OnInit {
  constructor() {}

  ngOnInit() {}

}

```