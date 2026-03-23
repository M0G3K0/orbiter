import { Component } from '@angular/core';
import { IconComponent } from 'ui';

/**
 * Demo: Icon Sizes
 */
@Component({
	selector: 'icon-sizes-demo',
	standalone: true,
	imports: [IconComponent],
	template: `
		@for (size of sizes; track size) {
			<orb-icon src="icons/sample.svg" [size]="size"></orb-icon>
		}
	`,
})
export class IconSizesDemoComponent {
	readonly sizes = ['sm', 'md', 'lg'] as const;
}
