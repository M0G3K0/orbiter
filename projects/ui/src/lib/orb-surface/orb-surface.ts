import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Surface component for container styling (background, border, radius, padding)
 *
 * @example
 * <orb-surface variant="subtle" padding="lg" radius="xl">
 *   <!-- content -->
 * </orb-surface>
 *
 * @reference
 * - Material UI Paper: https://mui.com/material-ui/react-paper/
 * - Radix UI Box: https://www.radix-ui.com/primitives
 */
@Component({
	selector: 'orb-surface',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './orb-surface.html',
	styleUrls: ['./orb-surface.scss'],
})
export class SurfaceComponent {
	/**
	 * Visual variant
	 * - default: white background
	 * - subtle: light gray background
	 * - card: white with shadow
	 * - ghost: transparent
	 * @default 'default'
	 */
	@Input() variant: 'default' | 'subtle' | 'card' | 'ghost' = 'default';

	/**
	 * Inner padding
	 * @default 'md'
	 */
	@Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

	/**
	 * Border radius
	 * @default 'md'
	 */
	@Input() radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';

	/**
	 * Show border
	 * @default false
	 */
	@Input() border = false;

	/**
	 * Container element classes
	 */
	get containerClasses(): string[] {
		const classes = [
			'orb-surface',
			`orb-surface--${this.variant}`,
			`orb-surface--padding-${this.padding}`,
			`orb-surface--radius-${this.radius}`,
		];
		if (this.border) {
			classes.push('orb-surface--border');
		}
		return classes;
	}
}
