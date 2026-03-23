import { Component, Input } from '@angular/core';
import { CardComponent } from 'ui';
import { CardHeaderComponent } from 'ui';
import { CardContentComponent } from 'ui';
import { CardFooterComponent } from 'ui';
import { HeadingComponent } from 'ui';
import { TextComponent } from 'ui';
import { ButtonComponent } from 'ui';

/**
 * Playground wrapper for Card
 */
@Component({
	selector: 'card-playground',
	standalone: true,
	imports: [
		CardComponent,
		CardHeaderComponent,
		CardContentComponent,
		CardFooterComponent,
		HeadingComponent,
		TextComponent,
		ButtonComponent,
	],
	template: `
		<orb-card [size]="size" [elevation]="elevation">
			<orb-card-header>
				<orb-heading [level]="3" size="md">{{ title }}</orb-heading>
			</orb-card-header>
			<orb-card-content>
				<orb-text variant="body-md">{{ content }}</orb-text>
			</orb-card-content>
			<orb-card-footer>
				<orb-button variant="primary" size="sm">{{ action }}</orb-button>
			</orb-card-footer>
		</orb-card>
	`,
	styles: [`
		:host {
			display: block;
			max-width: 320px;
		}
	`],
})
export class CardPlaygroundComponent {
	@Input() title = 'カードタイトル';
	@Input() content = 'カードのコンテンツです。';
	@Input() action = 'アクション';
	@Input() size: 'sm' | 'md' | 'lg' = 'md';
	@Input() elevation: 'flat' | 'raised' | 'overlay' = 'raised';
}
