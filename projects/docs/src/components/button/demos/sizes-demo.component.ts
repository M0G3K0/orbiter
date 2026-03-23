import { Component } from '@angular/core';
import { ButtonComponent } from 'ui';

/**
 * Demo: Button Sizes
 */
@Component({
	selector: 'button-sizes-demo',
	standalone: true,
	imports: [ButtonComponent],
	template: `
		@for (size of sizes; track size) {
			<orb-button variant="primary" [size]="size">{{ size }}</orb-button>
		}
	`,
})
export class ButtonSizesDemoComponent {
	readonly sizes = ['sm', 'md', 'lg'] as const;
}
