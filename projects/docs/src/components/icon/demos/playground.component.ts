import { Component, Input } from '@angular/core';
import { IconComponent } from 'ui';
import type { IconSize, IconColor } from 'ui';

/**
 * Playground wrapper for Icon
 */
@Component({
	selector: 'icon-playground',
	standalone: true,
	imports: [IconComponent],
	template: `
		<orb-icon
			[src]="iconPath"
			[size]="size"
			[color]="color"
			[alt]="alt"
		></orb-icon>
	`,
})
export class IconPlaygroundComponent {
	@Input() iconName = 'sample';
	@Input() size: IconSize = 'md';
	@Input() color: IconColor = 'default';
	@Input() alt = '';

	get iconPath(): string {
		return `icons/${this.iconName || 'sample'}.svg`;
	}
}
