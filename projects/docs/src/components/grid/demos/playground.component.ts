import { Component, Input } from '@angular/core';
import { GridComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Playground wrapper for Grid
 */
@Component({
	selector: 'grid-playground',
	standalone: true,
	imports: [GridComponent, SurfaceComponent, TextComponent],
	template: `
		<orb-grid
			[columns]="columns"
			[smColumns]="smColumns"
			[gap]="gap"
		>
			@for (i of [1, 2, 3, 4, 5, 6]; track i) {
				<orb-surface variant="subtle" padding="md" radius="sm">
					<orb-text variant="body-md" align="center">{{ i }}</orb-text>
				</orb-surface>
			}
		</orb-grid>
	`,
})
export class GridPlaygroundComponent {
	@Input() columns: 1 | 2 | 3 | 4 | 6 = 3;
	@Input() smColumns?: 1 | 2 | 3 | 4 | 6;
	@Input() gap: 'none' | 'sm' | 'md' | 'lg' = 'md';
}
