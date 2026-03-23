import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Grid column count options */
type GridColumns = 1 | 2 | 3 | 4 | 6;

/** Grid gap size options */
type GridGap = 'none' | 'sm' | 'md' | 'lg';

/**
 * Grid component for CSS Grid-based layouts
 *
 * @example
 * <orb-grid [columns]="2" [smColumns]="3" gap="md">
 *   <button *ngFor="let choice of choices">...</button>
 * </orb-grid>
 *
 * @reference
 * - CSS Grid Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
 */
@Component({
	selector: 'orb-grid',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './orb-grid.html',
	styleUrls: ['./orb-grid.scss'],
})
export class GridComponent {
	/** Default column count */
	private static readonly DEFAULT_COLUMNS: GridColumns = 2;

	/**
	 * Number of columns (default/mobile)
	 * @default 2
	 */
	@Input() columns: GridColumns = GridComponent.DEFAULT_COLUMNS;

	/**
	 * Number of columns on sm breakpoint (640px+)
	 * If not set, uses columns value
	 */
	@Input() smColumns?: GridColumns;

	/**
	 * Gap between grid items
	 * @default 'md'
	 */
	@Input() gap: GridGap = 'md';

	/**
	 * Container element classes
	 */
	get containerClasses(): string[] {
		const classes = [
			'orb-grid',
			`orb-grid--cols-${this.columns}`,
			`orb-grid--gap-${this.gap}`,
		];
		if (this.smColumns) {
			classes.push(`orb-grid--sm-cols-${this.smColumns}`);
		}
		return classes;
	}
}
