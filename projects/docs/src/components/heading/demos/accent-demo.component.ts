import { Component } from '@angular/core';
import { HeadingComponent } from 'ui';

/**
 * Demo: Heading with Accent Bar
 */
@Component({
	selector: 'heading-accent-demo',
	standalone: true,
	imports: [HeadingComponent],
	template: `
		<orb-heading [level]="3" [accent]="true">
			わざのダメージ倍率は？
		</orb-heading>
	`,
})
export class HeadingAccentDemoComponent { }
