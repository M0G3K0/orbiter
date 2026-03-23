// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../projects/docs/src/getting-started/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h1 id="welcome" href="getting-started" headinglink="true" class="ngde">Welcome<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="welcome"></ng-doc-heading-anchor></h1><p class="ngde"><strong class="ngde">Pokemon Type Quiz Design System</strong> は、ポケモンタイプ相性クイズアプリのためのUIコンポーネントライブラリです。</p><h2 id="about-this-documentation" href="getting-started" headinglink="true" class="ngde">About this Documentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="about-this-documentation"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><strong class="ngde">開発者向け</strong>: コンポーネントの使い方、API仕様、コード例</li><li class="ngde"><strong class="ngde">デザイナー向け</strong>: 各コンポーネントのバリエーション、ガイドライン</li><li class="ngde"><strong class="ngde">PM向け</strong>: 実装済み機能の一覧、品質確認</li></ul><h2 id="components" href="getting-started" headinglink="true" class="ngde">Components<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="components"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">コンポーネント</th><th class="ngde">説明</th><th class="ngde">状況</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">pt-button</code></td><td class="ngde">ボタン</td><td class="ngde">実装済み</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">pt-card</code></td><td class="ngde">カードコンテナ</td><td class="ngde">実装済み</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">pt-chip</code></td><td class="ngde">チップ/タグ</td><td class="ngde">実装済み</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">pt-avatar</code></td><td class="ngde">アバター画像</td><td class="ngde">実装済み</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">pt-text</code></td><td class="ngde">テキスト表示</td><td class="ngde">実装済み</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">pt-heading</code></td><td class="ngde">見出し</td><td class="ngde">実装済み</td></tr></tbody></table></div><h2 id="getting-started" href="getting-started" headinglink="true" class="ngde">Getting Started<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="getting-started"></ng-doc-heading-anchor></h2><p class="ngde">左のサイドバーからコンポーネントを選択して、詳細なドキュメントを確認してください。</p>`

@Component({
  selector: 'ng-doc-page-2zu5bbd9',
  template: `<ng-doc-page></ng-doc-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDocPageComponent,
    ...PLAYGROUND_COMPONENTS,
  ],
  providers: [
    {provide: NgDocRootPage, useExisting: PageComponent},
    PLAYGROUND_PROVIDERS,
    (entry.providers ?? []),
  ],
})
export class PageComponent extends NgDocRootPage {
  readonly pageType: NgDocPageType = 'guide';
  readonly pageContent: string = pageContent;
  readonly page?: NgDocPage = entry;
  readonly demoAssets: NgDocDemoAssets = demoAssets;

  constructor() {
    super();
  }
}

const routes: Routes = [{
  ...(isRoute(entry.route) ? entry.route : {}),
  path: '',
  component: PageComponent,
  title: `Getting Started`,
}]

export default routes;

