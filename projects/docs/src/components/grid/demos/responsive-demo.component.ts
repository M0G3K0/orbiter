import { Component } from '@angular/core';
import { GridComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Grid Responsive
 */
@Component({
	selector: 'grid-responsive-demo',
	standalone: true,
	imports: [GridComponent, SurfaceComponent, TextComponent],
	template: `
		<orb-text variant="label-sm" color="secondary">
			モバイル: 2列 / デスクトップ(640px以上): 3列
		</orb-text>
		<orb-grid [columns]="2" [smColumns]="3" gap="md">
			@for (i of [1, 2, 3, 4, 5, 6]; track i) {
				<orb-surface variant="subtle" padding="md" radius="sm">
					<orb-text variant="body-md" align="center">{{ i }}</orb-text>
				</orb-surface>
			}
		</orb-grid>
	`,
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	`],
})
export class GridResponsiveDemoComponent { }
