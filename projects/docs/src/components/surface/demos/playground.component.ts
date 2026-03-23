import { Component, Input } from '@angular/core';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Playground wrapper for Surface
 */
@Component({
	selector: 'surface-playground',
	standalone: true,
	imports: [SurfaceComponent, TextComponent],
	template: `
		<orb-surface
			[variant]="variant"
			[padding]="padding"
			[radius]="radius"
			[border]="border"
		>
			<orb-text variant="body-md">{{ content }}</orb-text>
		</orb-surface>
	`,
})
export class SurfacePlaygroundComponent {
	@Input() content = 'コンテンツ';
	@Input() variant: 'default' | 'subtle' | 'card' | 'ghost' = 'default';
	@Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
	@Input() radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
	@Input() border = false;
}
