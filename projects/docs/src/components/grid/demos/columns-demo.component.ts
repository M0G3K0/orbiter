import { Component } from '@angular/core';
import { GridComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Grid Columns
 */
@Component({
	selector: 'grid-columns-demo',
	standalone: true,
	imports: [GridComponent, SurfaceComponent, TextComponent],
	template: `
		@for (columns of columnOptions; track columns) {
			<div class="demo-container">
				<orb-text variant="label-sm" color="secondary">columns={{ columns }}</orb-text>
				<orb-grid [columns]="columns" gap="sm">
					@for (i of getItems(columns); track i) {
						<orb-surface variant="subtle" padding="sm" radius="sm">
							<orb-text variant="body-md" align="center">{{ i }}</orb-text>
						</orb-surface>
					}
				</orb-grid>
			</div>
		}
	`,
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
		.demo-container {
			display: flex;
			flex-direction: column;
			gap: 4px;
		}
	`],
})
export class GridColumnsDemoComponent {
	readonly columnOptions = [2, 3, 4] as const;

	getItems(columns: number): number[] {
		return Array.from({ length: columns }, (_, i) => i + 1);
	}
}
