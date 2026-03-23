import { Component } from '@angular/core';
import { IconComponent } from 'ui';

/**
 * Demo: Icon Colors
 */
@Component({
	selector: 'icon-types-demo',
	standalone: true,
	imports: [IconComponent],
	template: `
		@for (color of colors; track color) {
			<orb-icon src="icons/sample.svg" size="md" [color]="color"></orb-icon>
		}
	`,
})
export class IconTypesDemoComponent {
	readonly colors = ['default', 'primary', 'secondary', 'danger'] as const;
}
