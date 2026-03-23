import { Component } from '@angular/core';
import { AvatarComponent } from 'ui';

/**
 * Demo: Avatar Pixelated Mode
 */
@Component({
	selector: 'avatar-pixelated-demo',
	standalone: true,
	imports: [AvatarComponent],
	template: `
		<orb-avatar
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
			alt="ピカチュウ（通常）"
			size="lg"
			shape="square"
			[pixelated]="false"
		></orb-avatar>
		<orb-avatar
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
			alt="ピカチュウ（ピクセルアート）"
			size="lg"
			shape="square"
			[pixelated]="true"
		></orb-avatar>
	`,
})
export class AvatarPixelatedDemoComponent { }
