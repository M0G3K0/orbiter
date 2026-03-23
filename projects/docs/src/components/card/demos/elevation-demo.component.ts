import { Component } from '@angular/core';
import { CardComponent } from 'ui';
import { CardContentComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Card Elevation
 */
@Component({
	selector: 'card-elevation-demo',
	standalone: true,
	imports: [CardComponent, CardContentComponent, TextComponent],
	template: `
		@for (elevation of elevations; track elevation) {
			<orb-card [elevation]="elevation">
				<orb-card-content>
					<orb-text variant="body-md">elevation={{ elevation }}</orb-text>
				</orb-card-content>
			</orb-card>
		}
	`,
	styles: [`
		:host {
			display: flex;
			gap: 16px;
		}
	`],
})
export class CardElevationDemoComponent {
	readonly elevations = ['flat', 'raised', 'overlay'] as const;
}
