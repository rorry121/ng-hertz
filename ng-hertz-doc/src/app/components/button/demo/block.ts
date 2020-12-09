import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-button-block',
  template: `
    <div class="mb-16">
      <button hz-button hzShape="block" hzSize="xs">Primary</button>
      <button hz-button hzType="success" hzShape="block" hzSize="xs">Success</button>
      <button hz-button hzType="warning" hzShape="block" hzSize="xs">Warning</button>
      <button hz-button hzType="danger" hzShape="block" hzSize="xs">Danger</button>
      <button hz-button hzType="outline" hzShape="block" hzSize="xs">Outline</button>
      <button hz-button hzType="text" hzShape="block" hzSize="xs">Text</button>
      <button hz-button hzType="link" hzShape="block" hzSize="xs">Link</button>
      <button hz-button hzType="action" hzShape="block" hzSize="xs">Action</button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="block">Primary</button>
      <button hz-button hzType="success" hzShape="block">Success</button>
      <button hz-button hzType="warning" hzShape="block">Warning</button>
      <button hz-button hzType="danger" hzShape="block">Danger</button>
      <button hz-button hzType="outline" hzShape="block">Outline</button>
      <button hz-button hzType="text" hzShape="block">Text</button>
      <button hz-button hzType="link" hzShape="block">Link</button>
      <button hz-button hzType="action" hzShape="block">Action</button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="block" hzSize="l">Primary</button>
      <button hz-button hzType="success" hzShape="block" hzSize="m">Success</button>
      <button hz-button hzType="warning" hzShape="block" hzSize="m">Warning</button>
      <button hz-button hzType="danger" hzShape="block" hzSize="m">Danger</button>
      <button hz-button hzType="outline" hzShape="block" hzSize="m">Outline</button>
      <button hz-button hzType="text" hzShape="block" hzSize="m">Text</button>
      <button hz-button hzType="link" hzShape="block" hzSize="m">Link</button>
      <button hz-button hzType="action" hzShape="block" hzSize="m">Action</button>
    </div>
    <div class="mb-16">
      <button hz-button hzShape="block" hzSize="l">Primary</button>
      <button hz-button hzType="success" hzShape="block" hzSize="l">Success</button>
      <button hz-button hzType="warning" hzShape="block" hzSize="l">Warning</button>
      <button hz-button hzType="danger" hzShape="block" hzSize="l">Danger</button>
      <button hz-button hzType="outline" hzShape="block" hzSize="l">Outline</button>
      <button hz-button hzType="text" hzShape="block" hzSize="l">Text</button>
      <button hz-button hzType="link" hzShape="block" hzSize="l">Link</button>
      <button hz-button hzType="action" hzShape="block" hzSize="l">Action</button>
    </div>
  `,
  styles: [
    `
      [hzShape='block'] {
        margin-bottom: 4px;
      }
      .mb-16 {
        margin-bottom: 16px;
        width: 25%;
        display: inline-block;
      }
    `
  ]
})
export class HzDemoButtonBlock implements OnInit {
  constructor() {}

  ngOnInit() {}
}
