import { Component } from '@angular/core';
import { CardComponent } from 'ui';
import { CardContentComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Card Sizes
 */
@Component({
	selector: 'card-sizes-demo',
	standalone: true,
	imports: [CardComponent, CardContentComponent, TextComponent],
	template: `
		@for (size of sizes; track size) {
			<orb-card [size]="size">
				<orb-card-content>
					<orb-text variant="body-md">size={{ size }}</orb-text>
				</orb-card-content>
			</orb-card>
		}
	`,
	styles: [`
		:host {
			display: flex;
			gap: 16px;
			align-items: flex-start;
		}
	`],
})
export class CardSizesDemoComponent {
	readonly sizes = ['sm', 'md', 'lg'] as const;
}
