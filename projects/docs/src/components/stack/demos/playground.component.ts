import { Component, Input } from '@angular/core';
import { StackComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Playground wrapper for Stack
 */
@Component({
	selector: 'stack-playground',
	standalone: true,
	imports: [StackComponent, SurfaceComponent, TextComponent],
	template: `
		<orb-stack
			[direction]="direction"
			[gap]="gap"
			[align]="align"
			[justify]="justify"
		>
			@for (i of [1, 2, 3]; track i) {
				<orb-surface variant="subtle" padding="md" radius="sm">
					<orb-text variant="body-md">アイテム {{ i }}</orb-text>
				</orb-surface>
			}
		</orb-stack>
	`,
})
export class StackPlaygroundComponent {
	@Input() direction: 'vertical' | 'horizontal' | 'responsive' = 'vertical';
	@Input() gap: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	@Input() align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
	@Input() justify: 'start' | 'center' | 'end' | 'between' = 'start';
}
