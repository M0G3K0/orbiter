import { Component } from '@angular/core';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Surface Border Radius
 */
@Component({
	selector: 'surface-radius-demo',
	standalone: true,
	imports: [SurfaceComponent, TextComponent],
	template: `
		@for (radius of radiuses; track radius) {
			<orb-surface variant="subtle" padding="md" [radius]="radius" [border]="true">
				<orb-text variant="body-md">{{ radius }}</orb-text>
			</orb-surface>
		}
	`,
})
export class SurfaceRadiusDemoComponent {
	readonly radiuses = ['none', 'sm', 'md', 'lg', 'xl', 'full'] as const;
}
