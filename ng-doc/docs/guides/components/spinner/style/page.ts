// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/spinner/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="design-tokens" href="components/spinner/style" headinglink="true" class="ngde">Design Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="design-tokens"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde">pt-spinner</code>は以下のデザイントークンを使用します。</p><!-- @auto-generated:token-table:start --><h3 id="size" href="components/spinner/style" headinglink="true" class="ngde">Size<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="size"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-spinner-size-sm</code></td><td class="ngde"><code class="ngde">\{space.40\}</code></td><td class="ngde">16px</td><td class="ngde">小サイズ (16px)。インライン、ボタン内のローディングに使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-spinner-size-md</code></td><td class="ngde"><code class="ngde">\{space.100\}</code></td><td class="ngde">40px</td><td class="ngde">中サイズ (40px)。標準的なローディング表示に使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-spinner-size-lg</code></td><td class="ngde"><code class="ngde">\{space.160\}</code></td><td class="ngde">64px</td><td class="ngde">大サイズ (64px)。フルスクリーンローディングに使用。</td></tr></tbody></table></div><h3 id="border-width" href="components/spinner/style" headinglink="true" class="ngde">Border Width<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="border-width"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-spinner-border-width-sm</code></td><td class="ngde">2px</td><td class="ngde">小サイズ時のボーダー幅。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-spinner-border-width-md</code></td><td class="ngde">3px</td><td class="ngde">中サイズ時のボーダー幅。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-spinner-border-width-lg</code></td><td class="ngde">4px</td><td class="ngde">大サイズ時のボーダー幅。</td></tr></tbody></table></div><h3 id="color" href="components/spinner/style" headinglink="true" class="ngde">Color<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="color"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">primary</code></td><td class="ngde"><code class="ngde">--pt-spinner-color-primary</code></td><td class="ngde"><code class="ngde">\{color.text.primary\}</code></td><td class="ngde"></td><td class="ngde">プライマリカラー。デフォルトのスピナー色。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">secondary</code></td><td class="ngde"><code class="ngde">--pt-spinner-color-secondary</code></td><td class="ngde"><code class="ngde">\{color.text.secondary\}</code></td><td class="ngde"></td><td class="ngde">セカンダリカラー。控えめなスピナー色。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">track</code></td><td class="ngde"><code class="ngde">--pt-spinner-color-track</code></td><td class="ngde"></td><td class="ngde">rgba(0, 0, 0, 0.1)</td><td class="ngde">トラック色。ドーナツ状スピナーの背景リング。</td></tr></tbody></table></div><h3 id="animation" href="components/spinner/style" headinglink="true" class="ngde">Animation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="animation"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">duration</code></td><td class="ngde"><code class="ngde">--pt-spinner-animation-duration</code></td><td class="ngde">0.8s</td><td class="ngde">1回転にかかる時間。</td></tr></tbody></table></div><!-- @auto-generated:token-table:end --><h2 id="visual-design" href="components/spinner/style" headinglink="true" class="ngde">Visual Design<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="visual-design"></ng-doc-heading-anchor></h2><h3 id="ドーナツ形状" href="components/spinner/style" headinglink="true" class="ngde">ドーナツ形状<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="ドーナツ形状"></ng-doc-heading-anchor></h3><p class="ngde">Phase 3 で、スピナーの形状が <strong class="ngde">1/4円弧（イチョウ型）</strong> から <strong class="ngde">ドーナツ型（全円 + トラック）</strong> に変更されました。</p><ul class="ngde"><li class="ngde"><strong class="ngde">トラック</strong>: 薄いグレーの背景リング（<code class="ngde">--pt-spinner-color-track</code>）</li><li class="ngde"><strong class="ngde">インジケーター</strong>: 回転する色付きセグメント（primary/secondary）</li></ul><p class="ngde">この変更により、ローディング進捗がより分かりやすくなりました。</p><hr class="ngde"><h2 id="usage-guidelines" href="components/spinner/style" headinglink="true" class="ngde">Usage Guidelines<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="usage-guidelines"></ng-doc-heading-anchor></h2><h3 id="skeleton-ui-との使い分け" href="components/spinner/style" headinglink="true" class="ngde">Skeleton UI との使い分け<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="skeleton-ui-との使い分け"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">シチュエーション</th><th class="ngde">推奨UI</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde">コンテンツの形がわかっている</td><td class="ngde">Skeleton</td></tr><tr class="ngde"><td class="ngde">処理時間が不明・長い</td><td class="ngde">Spinner</td></tr><tr class="ngde"><td class="ngde">部分的な更新</td><td class="ngde">インラインSpinner</td></tr></tbody></table></div><hr class="ngde"><h2 id="related-tokens" href="components/spinner/style" headinglink="true" class="ngde">Related Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related-tokens"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">design-tokens/tier3-component/spinner.json</code>: コンポーネントトークン定義</li></ul>`

@Component({
  selector: 'ng-doc-page-k6egxh15',
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
  title: `Style`,
}]

export default routes;

