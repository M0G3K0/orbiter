import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	HostListener,
	inject,
	forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtRadioGroupComponent } from './orb-radio-group';

/**
 * Feedback state for radio buttons.
 * Used for quiz-like scenarios where selection results need visual feedback.
 */
export type RadioButtonFeedbackState = 'default' | 'correct' | 'wrong' | 'actual';

/**
 * orb-radio-button (Atom): 単一選択肢を表すラジオボタンコンポーネント
 *
 * 複数の選択肢から1つを選択する RadioButton パターンを提供。
 * feedbackState により正解/不正解などの検証結果を視覚的に表現可能。
 *
 * @example
 * ```html
 * <orb-radio-button [value]="1" [feedbackState]="'correct'">
 *   <orb-text variant="body-lg">1</orb-text>
 * </orb-radio-button>
 * ```
 */
@Component({
	selector: 'orb-radio-button',
	standalone: true,
	imports: [CommonModule],
	template: `<ng-content></ng-content>`,
	styles: [`
    :host {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: center;
      padding: var(--orb-radio-button-padding-y) var(--orb-radio-button-padding-x);
      border-radius: var(--orb-radio-button-radius);
      border: var(--orb-radio-button-border-width) solid var(--orb-radio-button-default-border);
      background-color: var(--orb-radio-button-default-bg);
      color: var(--orb-radio-button-default-text);
      cursor: pointer;
      transition: all var(--orb-motion-duration-quick) var(--orb-motion-easing-default);
      box-shadow: var(--orb-radio-button-shadow-default);
      user-select: none;
      outline: none;
    }
    
    :host(:hover:not(.disabled):not(.selected)) {
      border-color: var(--orb-radio-button-hover-border);
      background-color: var(--orb-radio-button-hover-bg);
    }
    
    :host(:active:not(.disabled)) {
      transform: scale(0.95);
    }
    
    :host(:focus-visible) {
      outline: 2px solid var(--orb-radio-button-focus-ring);
      outline-offset: 2px;
    }
    
    /* Selected state */
    :host(.selected) {
      background-color: var(--orb-radio-button-selected-bg);
      border-color: var(--orb-radio-button-selected-border);
      color: var(--orb-radio-button-selected-text);
      transform: scale(1.05);
      box-shadow: var(--orb-radio-button-shadow-selected);
      
      /* 子要素（orb-textなど）にも色を継承させる */
      ::ng-deep * {
        color: inherit !important;
      }
    }
    /* Feedback states - disabled より優先度を高く */
    :host(.feedback-correct),
    :host(.feedback-correct.disabled) {
      background-color: var(--orb-radio-button-feedback-correct-bg);
      border-color: var(--orb-radio-button-feedback-correct-border);
      color: var(--orb-radio-button-feedback-correct-text);
      opacity: 1;
      cursor: default;
      
      ::ng-deep * { color: inherit !important; }
    }
    
    :host(.feedback-wrong),
    :host(.feedback-wrong.disabled) {
      background-color: var(--orb-radio-button-feedback-wrong-bg);
      border-color: var(--orb-radio-button-feedback-wrong-border);
      color: var(--orb-radio-button-feedback-wrong-text);
      opacity: 1;
      cursor: default;
      
      ::ng-deep * { color: inherit !important; }
    }
    
    :host(.feedback-actual),
    :host(.feedback-actual.disabled) {
      background-color: var(--orb-radio-button-feedback-actual-bg);
      border-color: var(--orb-radio-button-feedback-actual-border);
      color: var(--orb-radio-button-feedback-actual-text);
      box-shadow: 0 0 0 4px var(--orb-radio-button-feedback-actual-ring);
      opacity: 1;
      cursor: default;
      
      ::ng-deep * { color: inherit !important; }
    }
    
    /* Disabled state - feedback がない場合のみ適用 */
    :host(.disabled:not(.feedback-correct):not(.feedback-wrong):not(.feedback-actual)) {
      background-color: var(--orb-radio-button-disabled-bg);
      border-color: var(--orb-radio-button-disabled-border);
      color: var(--orb-radio-button-disabled-text);
      opacity: 0.5;
      cursor: not-allowed;
    }
  `],
})
export class PtRadioButtonComponent<T = unknown> {
	/**
	 * The value of this radio button.
	 * Compared with the parent group's value to determine selection.
	 */
	@Input({ required: true }) value!: T;

	/**
	 * Whether this radio button is disabled.
	 */
	@Input() disabled = false;

	/**
	 * Feedback state for visual indication of results (e.g., correct/wrong in quizzes).
	 */
	@Input() feedbackState: RadioButtonFeedbackState = 'default';

	/**
	 * Whether this radio button is currently selected.
	 * Can be set directly or managed by orb-radio-group.
	 */
	@Input() selected = false;

	/**
	 * Emitted when this radio button is clicked/selected.
	 */
	@Output() readonly radioSelect = new EventEmitter<T>();

	private readonly group = inject(forwardRef(() => PtRadioGroupComponent), { optional: true });

	@HostBinding('class.selected')
	get isSelected(): boolean {
		// feedbackState が設定されている場合は selected クラスを付けない
		// （feedback スタイルが優先されるようにする）
		if (this.feedbackState !== 'default') {
			return false;
		}
		if (this.group) {
			return this.group.value === this.value;
		}
		return this.selected;
	}

	@HostBinding('class.disabled')
	get isDisabled(): boolean {
		return this.disabled || (this.group?.disabled ?? false);
	}

	@HostBinding('class.feedback-correct')
	get isFeedbackCorrect(): boolean {
		return this.feedbackState === 'correct';
	}

	@HostBinding('class.feedback-wrong')
	get isFeedbackWrong(): boolean {
		return this.feedbackState === 'wrong';
	}

	@HostBinding('class.feedback-actual')
	get isFeedbackActual(): boolean {
		return this.feedbackState === 'actual';
	}

	@HostBinding('attr.role')
	readonly role = 'radio';

	@HostBinding('attr.aria-checked')
	get ariaChecked(): string {
		return this.isSelected ? 'true' : 'false';
	}

	@HostBinding('attr.aria-disabled')
	get ariaDisabled(): string | null {
		return this.isDisabled ? 'true' : null;
	}

	@HostBinding('attr.tabindex')
	get tabIndex(): number {
		return this.isDisabled ? -1 : 0;
	}

	@HostListener('click')
	onClick(): void {
		if (this.isDisabled) return;

		this.radioSelect.emit(this.value);
		this.group?.selectValue(this.value);
	}

	@HostListener('keydown.space', ['$event'])
	@HostListener('keydown.enter', ['$event'])
	onKeydown(event: Event): void {
		event.preventDefault();
		this.onClick();
	}
}
