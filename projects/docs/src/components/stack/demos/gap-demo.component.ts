import { Component } from '@angular/core';
import { StackComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Stack Gap
 */
@Component({
	selector: 'stack-gap-demo',
	standalone: true,
	imports: [StackComponent, SurfaceComponent, TextComponent],
	template: `
		@for (gap of gaps; track gap) {
			<div class="demo-container">
				<orb-text variant="label-sm" color="secondary">gap={{ gap }}</orb-text>
				<orb-stack direction="horizontal" [gap]="gap">
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
export class StackGapDemoComponent {
	readonly gaps = ['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
}
