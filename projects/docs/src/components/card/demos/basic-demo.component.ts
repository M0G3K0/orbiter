import { Component } from '@angular/core';
import { CardComponent } from 'ui';
import { CardHeaderComponent } from 'ui';
import { CardContentComponent } from 'ui';
import { CardFooterComponent } from 'ui';
import { HeadingComponent } from 'ui';
import { TextComponent } from 'ui';
import { ButtonComponent } from 'ui';

/**
 * Demo: Card Basic
 */
@Component({
	selector: 'card-basic-demo',
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
		<orb-card>
			<orb-card-header>
				<orb-heading [level]="3" size="md">カードタイトル</orb-heading>
			</orb-card-header>
			<orb-card-content>
				<orb-text variant="body-md">
					カードのメインコンテンツです。関連する情報をグループ化して表示します。
				</orb-text>
			</orb-card-content>
			<orb-card-footer>
				<orb-button variant="primary" size="sm">アクション</orb-button>
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
export class CardBasicDemoComponent { }
