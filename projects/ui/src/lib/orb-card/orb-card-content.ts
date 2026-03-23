import { Component } from '@angular/core';

/**
 * カードコンテンツコンポーネント
 *
 * カードのメインコンテンツエリア。
 * 本文、説明文、フォームなどを配置する。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-header>...</orb-card-header>
 *   <orb-card-content>
 *     <p>本文テキスト</p>
 *   </orb-card-content>
 * </orb-card>
 * ```
 */
@Component({
  selector: 'orb-card-content',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: block;
      padding: var(--orb-card-section-padding);
    }
  `,
})
export class CardContentComponent { }

