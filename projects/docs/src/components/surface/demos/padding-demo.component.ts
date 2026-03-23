import { Component } from '@angular/core';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Surface Padding
 */
@Component({
	selector: 'surface-padding-demo',
	standalone: true,
	imports: [SurfaceComponent, TextComponent],
	template: `
		@for (padding of paddings; track padding) {
			<orb-surface variant="subtle" [padding]="padding" radius="md" [border]="true">
				<orb-text variant="body-md">padding={{ padding }}</orb-text>
			</orb-surface>
		}
	`,
})
export class SurfacePaddingDemoComponent {
	readonly paddings = ['none', 'sm', 'md', 'lg'] as const;
}
