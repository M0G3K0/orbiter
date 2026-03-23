import { Component } from '@angular/core';
import { GridComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Grid Gap
 */
@Component({
	selector: 'grid-gap-demo',
	standalone: true,
	imports: [GridComponent, SurfaceComponent, TextComponent],
	template: `
		@for (gap of gaps; track gap) {
			<div class="demo-container">
				<orb-text variant="label-sm" color="secondary">gap={{ gap }}</orb-text>
				<orb-grid [columns]="3" [gap]="gap">
					@for (i of [1, 2, 3]; track i) {
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
export class GridGapDemoComponent {
	readonly gaps = ['none', 'sm', 'md', 'lg'] as const;
}
