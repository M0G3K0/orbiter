import { Component, Input } from '@angular/core';

/**
 * カードコンポーネント
 * 
 * 関連するコンテンツをグループ化するコンテナ。
 * 情報の階層を視覚的に表現する。
 * 
 * @example
 * ```html
 * <orb-card size="md" elevation="raised">
 *   <h2>タイトル</h2>
 *   <p>コンテンツ</p>
 * </orb-card>
 * ```
 */
@Component({
  selector: 'orb-card',
  standalone: true,
  template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './orb-card.scss',
})
export class CardComponent {
  /** カードのパディングサイズ */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** カードの影の強さ */
  @Input() elevation: 'flat' | 'raised' | 'overlay' = 'raised';

  get cardClasses(): string {
    return [
      'orb-card',
      `orb-card--${this.size}`,
      `orb-card--${this.elevation}`,
    ].join(' ');
  }
}
