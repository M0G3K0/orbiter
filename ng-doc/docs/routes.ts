// @ts-nocheck
import {Routes} from '@angular/router';
import entryeg532csmomw from '../../projects/docs/src/components/ng-doc.category';

export const NG_DOC_ROUTING: Routes = [
	
	{
		path: 'getting-started',
		title: `Getting Started`,
		loadChildren: () => import('./guides/getting-started/page'),
	},
	
	{
		path: 'components',
		title: `Components`,
    providers: [
      ...(entryeg532csmomw.providers ?? []),
    ],
		children: [{
			path: '',
			redirectTo: 'button',
			pathMatch: 'full'
		},
	{
		path: 'button',
		title: `Button`,
		loadChildren: () => import('./guides/components/button/page'),
	},
	{
		path: 'avatar',
		title: `Avatar`,
		loadChildren: () => import('./guides/components/avatar/page'),
	},
	{
		path: 'heading',
		title: `Heading`,
		loadChildren: () => import('./guides/components/heading/page'),
	},
	{
		path: 'surface',
		title: `Surface`,
		loadChildren: () => import('./guides/components/surface/page'),
	},
	{
		path: 'stack',
		title: `Stack`,
		loadChildren: () => import('./guides/components/stack/page'),
	},
	{
		path: 'card',
		title: `Card`,
		loadChildren: () => import('./guides/components/card/page'),
	},
	{
		path: 'radio-button',
		title: `Radio Button`,
		loadChildren: () => import('./guides/components/radio-button/page'),
	},
	{
		path: 'icon',
		title: `Icon`,
		loadChildren: () => import('./guides/components/icon/page'),
	},
	{
		path: 'chip',
		title: `Chip`,
		loadChildren: () => import('./guides/components/chip/page'),
	},
	{
		path: 'grid',
		title: `Grid`,
		loadChildren: () => import('./guides/components/grid/page'),
	},
	{
		path: 'spinner',
		title: `Spinner`,
		loadChildren: () => import('./guides/components/spinner/page'),
	},
	{
		path: 'text',
		title: `Text`,
		loadChildren: () => import('./guides/components/text/page'),
	},],
	},
];
