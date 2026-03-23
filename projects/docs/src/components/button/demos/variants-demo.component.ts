import { Component } from '@angular/core';
import { ButtonComponent } from 'ui';

/**
 * Demo: Button Variants
 */
@Component({
	selector: 'button-variants-demo',
	standalone: true,
	imports: [ButtonComponent],
	template: `
		@for (variant of variants; track variant) {
			<orb-button [variant]="variant">{{ variant }}</orb-button>
		}
	`,
})
export class ButtonVariantsDemoComponent {
	readonly variants = ['primary', 'secondary', 'danger', 'ghost'] as const;
}
