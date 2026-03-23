import { Component } from '@angular/core';
import { ButtonComponent } from 'ui';

/**
 * Demo: Button Disabled States
 */
@Component({
	selector: 'button-disabled-demo',
	standalone: true,
	imports: [ButtonComponent],
	template: `
		@for (variant of variants; track variant) {
			<orb-button [variant]="variant" [disabled]="true">{{ variant }}</orb-button>
		}
	`,
})
export class ButtonDisabledDemoComponent {
	readonly variants = ['primary', 'secondary', 'danger', 'ghost'] as const;
}
