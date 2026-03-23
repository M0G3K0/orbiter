import { Component } from '@angular/core';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Surface Variants
 */
@Component({
	selector: 'surface-variants-demo',
	standalone: true,
	imports: [SurfaceComponent, TextComponent],
	template: `
		@for (variant of variants; track variant) {
			<orb-surface [variant]="variant" padding="md" radius="md">
				<orb-text variant="body-md">{{ variant }}</orb-text>
			</orb-surface>
		}
	`,
	styles: [`
		:host {
			display: flex;
			gap: 16px;
			padding: 16px;
			background: #f5f5f5;
		}
	`],
})
export class SurfaceVariantsDemoComponent {
	readonly variants = ['default', 'subtle', 'card', 'ghost'] as const;
}
