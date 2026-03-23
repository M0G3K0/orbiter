import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'ui';

/**
 * Playground wrapper for Button
 */
@Component({
	selector: 'button-playground',
	standalone: true,
	imports: [ButtonComponent],
	template: `
		<orb-button
			[variant]="variant"
			[size]="size"
			[disabled]="disabled"
		>{{ label }}</orb-button>
	`,
})
export class ButtonPlaygroundComponent {
	@Input() label = 'ボタン';
	@Input() variant: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() disabled = false;
}
