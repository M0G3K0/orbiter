import { Component } from '@angular/core';
import { TextComponent, TextWeight } from 'ui';

/**
 * Demo: Text Weights
 */
@Component({
	selector: 'text-weights-demo',
	standalone: true,
	imports: [TextComponent],
	template: `
		@for (weight of weights; track weight) {
			<orb-text variant="body-md" [weight]="weight">{{ weight }}</orb-text>
		}
	`,
})
export class TextWeightsDemoComponent {
	readonly weights: TextWeight[] = ['normal', 'medium', 'bold', 'black'];
}
