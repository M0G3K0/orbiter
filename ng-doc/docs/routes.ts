// @ts-nocheck
import {Routes} from '@angular/router';
import entry4ejsbra84q5 from '../../projects/docs/src/components/ng-doc.category';

export const NG_DOC_ROUTING: Routes = [
	
	{
		path: 'components',
		title: `Components`,
    providers: [
      ...(entry4ejsbra84q5.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'stack',
			pathMatch: 'full'
		},
	{
		path: 'stack',
		title: `Stack`,
		loadChildren: () => import('./guides/components/stack/page'),
	},
	{
		path: 'avatar',
		title: `Avatar`,
		loadChildren: () => import('./guides/components/avatar/page'),
	},
	{
		path: 'chip',
		title: `Chip`,
		loadChildren: () => import('./guides/components/chip/page'),
	},
	{
		path: 'surface',
		title: `Surface`,
		loadChildren: () => import('./guides/components/surface/page'),
	},
	{
		path: 'text',
		title: `Text`,
		loadChildren: () => import('./guides/components/text/page'),
	},
	{
		path: 'button',
		title: `Button`,
		loadChildren: () => import('./guides/components/button/page'),
	},
	{
		path: 'card',
		title: `Card`,
		loadChildren: () => import('./guides/components/card/page'),
	},
	{
		path: 'spinner',
		title: `Spinner`,
		loadChildren: () => import('./guides/components/spinner/page'),
	},
	{
		path: 'icon',
		title: `Icon`,
		loadChildren: () => import('./guides/components/icon/page'),
	},
	{
		path: 'heading',
		title: `Heading`,
		loadChildren: () => import('./guides/components/heading/page'),
	},
	{
		path: 'grid',
		title: `Grid`,
		loadChildren: () => import('./guides/components/grid/page'),
	},
	{
		path: 'radio-button',
		title: `Radio Button`,
		loadChildren: () => import('./guides/components/radio-button/page'),
	},],
	},
	
	{
		path: 'getting-started',
		title: `Getting Started`,
		loadChildren: () => import('./guides/getting-started/page'),
	},
];
