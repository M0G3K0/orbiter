import { Component } from '@angular/core';
import { PtRadioButtonComponent, RadioButtonFeedbackState } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Radio Button Feedback States
 */
@Component({
	selector: 'radio-button-feedback-demo',
	standalone: true,
	imports: [PtRadioButtonComponent, TextComponent],
	template: `
		@for (state of states; track state) {
			<orb-radio-button
				[value]="state"
				[feedbackState]="state"
				[disabled]="state !== 'default'"
			>
				<orb-text variant="body-md">{{ state }}</orb-text>
			</orb-radio-button>
		}
	`,
})
export class RadioButtonFeedbackDemoComponent {
	readonly states: RadioButtonFeedbackState[] = ['default', 'correct', 'wrong', 'actual'];
}
