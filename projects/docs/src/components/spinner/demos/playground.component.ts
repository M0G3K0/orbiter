import { Component, Input } from '@angular/core';
import { SpinnerComponent } from 'ui';

/**
 * Playground wrapper for Spinner
 */
@Component({
	selector: 'spinner-playground',
	standalone: true,
	imports: [SpinnerComponent],
	template: `
		<orb-spinner
			[size]="size"
			[variant]="variant"
			[ariaLabel]="ariaLabel"
		></orb-spinner>
	`,
})
export class SpinnerPlaygroundComponent {
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() variant: 'primary' | 'secondary' = 'primary';
	@Input() ariaLabel = 'Loading...';
}
