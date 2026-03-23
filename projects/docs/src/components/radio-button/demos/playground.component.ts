import { Component, Input } from '@angular/core';
import { PtRadioButtonComponent, RadioButtonFeedbackState } from 'ui';
import { TextComponent } from 'ui';

/**
 * Playground wrapper for Radio Button
 */
@Component({
	selector: 'radio-button-playground',
	standalone: true,
	imports: [PtRadioButtonComponent, TextComponent],
	template: `
		<orb-radio-button
			[value]="value"
			[selected]="selected"
			[disabled]="disabled"
			[feedbackState]="feedbackState"
		>
			<orb-text variant="body-md">{{ label }}</orb-text>
		</orb-radio-button>
	`,
})
export class RadioButtonPlaygroundComponent {
	@Input() label = '選択肢';
	@Input() value = 'option1';
	@Input() selected = false;
	@Input() disabled = false;
	@Input() feedbackState: RadioButtonFeedbackState = 'default';
}
