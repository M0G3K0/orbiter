import { Component } from '@angular/core';
import { StackComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Stack Direction
 */
@Component({
	selector: 'stack-direction-demo',
	standalone: true,
	imports: [StackComponent, SurfaceComponent, TextComponent],
	template: `
		@for (direction of directions; track direction) {
			<div class="demo-container">
				<orb-text variant="label-sm" color="secondary">{{ direction }}</orb-text>
				<orb-stack [direction]="direction" gap="sm">
					@for (i of [1, 2, 3]; track i) {
						<orb-surface variant="subtle" padding="sm" radius="sm">
							<orb-text variant="body-md">{{ i }}</orb-text>
						</orb-surface>
					}
				</orb-stack>
			</div>
		}
	`,
	styles: [`
		:host {
			display: flex;
			gap: 24px;
		}
		.demo-container {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	`],
})
export class StackDirectionDemoComponent {
	readonly directions = ['vertical', 'horizontal'] as const;
}
