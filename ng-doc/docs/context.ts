// @ts-nocheck
import { Provider } from '@angular/core';
import { NG_DOC_CONTEXT, NG_DOC_ROUTE_PREFIX, NG_DOC_SHIKI_THEME } from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider[] {
  return [{
    provide: NG_DOC_CONTEXT,
    useValue: {
      navigation: [
          
        {
          title: `Components`,
          route: '/components',
          expandable: true,
          expanded: false,
          order: 1,
          hidden: false,
          metadata: {"description":"","tags":{}},
          children: [
              
        {
          title: `Avatar`,
          route: '/components/avatar',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Button`,
          route: '/components/button',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Card`,
          route: '/components/card',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Chip`,
          route: '/components/chip',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Grid`,
          route: '/components/grid',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Heading`,
          route: '/components/heading',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Icon`,
          route: '/components/icon',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Radio Button`,
          route: '/components/radio-button',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Spinner`,
          route: '/components/spinner',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Stack`,
          route: '/components/stack',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Surface`,
          route: '/components/surface',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
              
        {
          title: `Text`,
          route: '/components/text',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          ]
        },
          
        {
          title: `Getting Started`,
          route: '/getting-started',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
      ],
    },
  }, {
    provide: NG_DOC_ROUTE_PREFIX,
    useValue: '',
  }, {
    provide: NG_DOC_SHIKI_THEME,
    useValue: {
      light: '',
      dark: '',
    },
  }];
}
