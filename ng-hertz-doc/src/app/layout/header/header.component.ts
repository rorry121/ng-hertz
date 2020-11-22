import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  dark = {
    '--primary-900': '#3D85FF',
    '--primary-800': '#4C8EFF',
    '--primary-700': '#5C98FF',
    '--primary-a100': 'rgba(61, 133, 255, 0.15)',
    '--primary-a200': 'rgba(61, 133, 255, 0.3)',
    '--primary-a300': 'rgba(61, 133, 255, 0.4)',
    '--mono-100': '#13151A',
    '--mono-200': '#191D25',
    '--mono-300': '#1F2430',
    '--mono-400': '#293246',
    '--mono-500': '#34405C',
    '--mono-600': '#3F4F73',
    '--mono-a100': 'rgba(204, 219, 255, 0.06)',
    '--mono-a200': 'rgba(204, 219, 255, 0.1)',
    '--mono-a300': 'rgba(204, 219, 255, 0.16)',
    '--mono-a400': 'rgba(204, 219, 255, 0.25)',
    '--mono-a500': 'rgba(204, 219, 255, 0.32)',
    '--mono-a900': 'rgba(230, 235, 255, 0.9)',
    '--mono-m100': 'rgba(22, 28, 40, 0.82)',
    '--background-100': '#13151A',
    '--background-200': '#191D25',
    '--background-300': '#1F2430',
    '--background-400': '#293246',
    '--background-500': '#34405C',
    '--background-600': '#34405C',
    '--type-600': 'rgba(255, 255, 255, 0.32)',
    '--type-700': 'rgba(255, 255, 255, 0.5)',
    '--type-800': 'rgba(255, 255, 255, 0.7)',
    '--type-900': 'rgba(255, 255, 255, 1)',
    '--general-100': '#FFFFFF',
    '--general-900': '#151618',
    '--ceruleam-900': '#0092E0',
    '--ceruleam-a100': 'rgba(0, 146, 224, 0.15)',
    '--teal-900': '#00B1B8',
    '--teal-450': 'rgba(0, 177, 184, 0.08)',
    '--teal-a100': 'rgba(0, 177, 184, 0.15)',
    '--teal-a200': 'rgba(0, 177, 184, 0.25)',
    '--teal-a300': 'rgba(0, 177, 184, 0.38)',
    '--teal-a500': 'rgba(0, 177, 184, 0.54)',

    '--orange-900': '#FF9029',
    '--orange-a100': 'rgba(255, 144, 41, 0.15)',

    '--violet-900': '#913DFF',
    '--violet-a100': 'rgba(145, 61, 255, 0.15)',

    '--yellow-900': '#EBC400',
    '--yellow-a100': 'rgba(235, 196, 0, 0.15)',

    '--red-100': '#361D24',
    '--red-200': '#421F28',
    '--red-900': '#FF475D',
    '--red-a100': 'rgba(255, 71, 93, 0.15)',
    '--red-a200': 'rgba(255, 71, 93, 0.2)',
    '--red-a300': 'rgba(255, 71, 93, 0.25)',

    '--lime-900': '#218D41',
    '--lime-a100': 'rgba(33, 141, 65, 0.15),',
    '--lime-a300': 'rgba(33, 141, 65, 0.25),',

    '--container-c100': '0px 8px 64px rgba(4, 8, 16, 0.48), 0px 0px 1px rgba(4, 8, 16, 0.32)',
    '--container-c200': '0px 4px 8px rgba(4, 8, 16, 0.16), 0px 1px 3px rgba(4, 8, 16, 0.32), 0px 0px 1px rgba(4, 8, 16, 0.32)',
    '--container-c300': '0px 8px 24px -6px rgba(4, 8, 16, 0.56), 0px 1px 3px rgba(4, 8, 16, 0.3), 0px 0px 1px rgba(4, 8, 16, 0.32)',
    '--container-c400': '0px 16px 32px -6px rgba(4, 8, 16, 0.64), 0px 3px 8px -2px rgba(4, 8, 16, 0.48), 0px 0px 1px rgba(4, 8, 16, 0.32)',
    '--container-c500':
      '0px 48px 128px -16px rgba(4, 8, 16, 0.64), 0px 16px 64px -16px rgba(4, 8, 16, 0.72), 0px 0px 1px rgba(4, 8, 16, 0.32)'
  };
  theme = 'light';

  @Output() menuClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  changeTheme() {
    const theme = document.documentElement.getAttribute('theme');
    this.theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('theme', this.theme);
    // for (const key in this.dark) {
    //   if ( this.dark.hasOwnProperty(key)) {
    //     document.documentElement.style.setProperty(key, this.dark[key]);
    //   }
    // }
  }
}
