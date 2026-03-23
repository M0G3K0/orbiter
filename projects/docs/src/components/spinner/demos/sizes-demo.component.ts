import { Component } from '@angular/core';
import { SpinnerComponent } from 'ui';

/**
 * Demo: Spinner Sizes
 */
@Component({
	selector: 'spinner-sizes-demo',
	standalone: true,
	imports: [SpinnerComponent],
	template: `
		@for (size of sizes; track size) {
			<orb-spinner [size]="size"></orb-spinner>
		}
	`,
})
export class SpinnerSizesDemoComponent {
	readonly sizes = ['sm', 'md', 'lg'] as const;
}
