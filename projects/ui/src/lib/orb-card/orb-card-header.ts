import { Component } from '@angular/core';

/**
 * カードヘッダーコンポーネント
 *
 * カードのタイトル・見出しエリア。
 * 下部にボーダーを持ち、コンテンツと視覚的に分離される。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-header>
 *     <h2>タイトル</h2>
 *   </orb-card-header>
 *   <orb-card-content>...</orb-card-content>
 * </orb-card>
 * ```
 */
@Component({
  selector: 'orb-card-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: block;
      padding: var(--orb-card-section-padding);
      border-bottom: 1px solid var(--orb-card-section-separator);
    }
  `,
})
export class CardHeaderComponent { }

