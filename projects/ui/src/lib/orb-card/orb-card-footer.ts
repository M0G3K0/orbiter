import { Component } from '@angular/core';

/**
 * カードフッターコンポーネント
 *
 * カードのアクションエリア。
 * ボタンやリンクなどの操作要素を配置する。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-content>...</orb-card-content>
 *   <orb-card-footer>
 *     <orb-button>保存</orb-button>
 *     <orb-button variant="ghost">キャンセル</orb-button>
 *   </orb-card-footer>
 * </orb-card>
 * ```
 */
@Component({
  selector: 'orb-card-footer',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: flex;
      gap: var(--orb-card-section-gap);
      padding: var(--orb-card-section-padding);
      border-top: 1px solid var(--orb-card-section-separator);
      justify-content: flex-end;
    }
  `,
})
export class CardFooterComponent { }

