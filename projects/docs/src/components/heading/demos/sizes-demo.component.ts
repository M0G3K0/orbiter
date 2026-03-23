import { Component } from '@angular/core';
import { HeadingComponent, HeadingSize } from 'ui';

/**
 * Demo: Heading Sizes (visual sizes independent of semantic level)
 */
@Component({
	selector: 'heading-sizes-demo',
	standalone: true,
	imports: [HeadingComponent],
	template: `
		@for (size of sizes; track size) {
			<orb-heading [level]="3" [size]="size">サイズ {{ size }}</orb-heading>
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
export class HeadingSizesDemoComponent {
	readonly sizes: HeadingSize[] = ['xl', 'lg', 'md', 'sm'];
}
