import { Component, Input } from '@angular/core';
import { ChipComponent } from 'ui';

/**
 * Playground wrapper for ChipComponent
 * Only essential inputs exposed for interactive experimentation
 */
@Component({
	selector: 'chip-playground',
	standalone: true,
	imports: [ChipComponent],
	template: `
		<orb-chip
			[size]="size"
			[rounded]="rounded"
		>
			Chip
		</orb-chip>
	`,
	styles: [`
		:host {
			--orb-chip-bg: var(--orb-color-surface-pressed);
			--orb-chip-text: var(--orb-color-text-primary);
		}
	`],
})
export class ChipPlaygroundComponent {
	/**
	 * Chip size
	 */
	@Input() size: 'sm' | 'md' = 'md';

	/**
	 * Border radius
	 */
	@Input() rounded: 'none' | 'sm' | 'md' | 'full' = 'md';
}
