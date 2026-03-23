import { Component } from '@angular/core';
import { SpinnerComponent } from 'ui';

/**
 * Demo: Spinner Variants
 */
@Component({
	selector: 'spinner-variants-demo',
	standalone: true,
	imports: [SpinnerComponent],
	template: `
		@for (variant of variants; track variant) {
			<orb-spinner size="md" [variant]="variant"></orb-spinner>
		}
	`,
})
export class SpinnerVariantsDemoComponent {
	readonly variants = ['primary', 'secondary'] as const;
}
