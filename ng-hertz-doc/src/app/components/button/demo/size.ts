import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-button-size',
  template: `
    <div class="mb-16">
      <button hz-button hzSize="xs">Primary</button>
      <button hz-button hzType="success" hzSize="xs">Success</button>
      <button hz-button hzType="warning" hzSize="xs">Warning</button>
      <button hz-button hzType="danger" hzSize="xs">Danger</button>
      <button hz-button hzType="outline" hzSize="xs">Outline</button>
      <button hz-button hzType="text" hzSize="xs">Text</button>
      <button hz-button hzType="link" hzSize="xs">Link</button>
      <button hz-button hzType="action" hzSize="xs"><i hz-icon hzName="rule-add"></i><span>Action</span></button>
    </div>
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
      <button hz-button hzSize="m">Primary</button>
      <button hz-button hzType="success" hzSize="m">Success</button>
      <button hz-button hzType="warning" hzSize="m">Warning</button>
      <button hz-button hzType="danger" hzSize="m">Danger</button>
      <button hz-button hzType="outline" hzSize="m">Outline</button>
      <button hz-button hzType="text" hzSize="m">Text</button>
      <button hz-button hzType="link" hzSize="m">Link</button>
      <button hz-button hzType="action" hzSize="m"><i hz-icon hzName="rule-add"></i><span>Action</span></button>
    </div>
    <div class="mb-16">
      <button hz-button hzSize="l">Primary</button>
      <button hz-button hzType="success" hzSize="l">Success</button>
      <button hz-button hzType="warning" hzSize="l">Warning</button>
      <button hz-button hzType="danger" hzSize="l">Danger</button>
      <button hz-button hzType="outline" hzSize="l">Outline</button>
      <button hz-button hzType="text" hzSize="l">Text</button>
      <button hz-button hzType="link" hzSize="l">Link</button>
      <button hz-button hzType="action" hzSize="l"><i hz-icon hzName="rule-add"></i><span>Action</span></button>
    </div>
  `,
  styles: [
    `
      [hz-button] {
        margin-right: 16px;
      }
      .mb-16 {
        margin-bottom: 16px;
      }
    `
  ]
})
export class HzDemoButtonSize implements OnInit {
  constructor() {}

  ngOnInit() {}
}
