import { Component, signal } from '@angular/core';
import { PtRadioButtonComponent } from 'ui';
import { PtRadioGroupComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Radio Button Group
 */
@Component({
	selector: 'radio-button-group-demo',
	standalone: true,
	imports: [PtRadioButtonComponent, PtRadioGroupComponent, TextComponent],
	template: `
		<orb-radio-group
			name="difficulty"
			[value]="selectedDifficulty()"
			(valueChange)="selectedDifficulty.set($event)"
			layout="horizontal"
		>
			@for (option of options; track option.value) {
				<orb-radio-button [value]="option.value">
					<orb-text variant="body-md">{{ option.label }}</orb-text>
				</orb-radio-button>
			}
		</orb-radio-group>
		<orb-text variant="label-sm" color="secondary">選択中: {{ selectedDifficulty() }}</orb-text>
	`,
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	`],
})
export class RadioButtonGroupDemoComponent {
	readonly options = [
		{ value: 'easy', label: 'かんたん' },
		{ value: 'normal', label: 'ふつう' },
		{ value: 'hard', label: 'むずかしい' },
	];
	selectedDifficulty = signal('normal');
}
