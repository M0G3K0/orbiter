import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * ボタンコンポーネント
 * 
 * 一貫したボタンUIを提供する自己完結型コンポーネント。
 * アクションの実行を促すUIに使用する。
 * 
 * @example
 * ```html
 * <orb-button variant="primary" size="md">送信</orb-button>
 * <orb-button variant="danger" size="sm" [disabled]="true">削除</orb-button>
 * ```
 */
@Component({
  selector: 'orb-button',
  standalone: true,
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './orb-button.scss',
})
export class ButtonComponent {
  /** ボタンの色バリエーション */
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';

  /** ボタンのサイズ */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** 無効状態 */
  @Input() disabled = false;

  /** クリックイベント */
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    return [
      'orb-button',
      `orb-button--${this.size}`,
      `orb-button--${this.variant}`,
    ].join(' ');
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }
}
