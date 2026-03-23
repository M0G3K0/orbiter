import { Component } from '@angular/core';
import { HeadingComponent, HeadingLevel } from 'ui';

/**
 * Demo: Heading Levels
 */
@Component({
	selector: 'heading-levels-demo',
	standalone: true,
	imports: [HeadingComponent],
	template: `
		@for (level of levels; track level) {
			<orb-heading [level]="level">見出しレベル {{ level }}</orb-heading>
		}
	`,
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
	`],
})
export class HeadingLevelsDemoComponent {
	readonly levels: HeadingLevel[] = [1, 2, 3, 4, 5, 6];
}
