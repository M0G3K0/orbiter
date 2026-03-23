import { Component, Input } from '@angular/core';
import { AvatarComponent, AvatarSize, AvatarShape } from 'ui';

/**
 * Playground wrapper for Avatar
 */
@Component({
	selector: 'avatar-playground',
	standalone: true,
	imports: [AvatarComponent],
	template: `
		<orb-avatar
			[src]="src"
			[alt]="alt"
			[size]="size"
			[shape]="shape"
			[pixelated]="pixelated"
		></orb-avatar>
	`,
})
export class AvatarPlaygroundComponent {
	@Input() src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
	@Input() alt = 'ピカチュウ';
	@Input() size: AvatarSize = 'md';
	@Input() shape: AvatarShape = 'circle';
	@Input() pixelated = false;
}
