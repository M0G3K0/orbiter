// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/avatar/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="design-tokens" href="components/avatar/style" headinglink="true" class="ngde">Design Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="design-tokens"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde">pt-avatar</code>は以下のデザイントークンを使用します。</p><!-- @auto-generated:token-table:start --><h3 id="size" href="components/avatar/style" headinglink="true" class="ngde">Size<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="size"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-avatar-size-sm</code></td><td class="ngde">32px</td><td class="ngde">小サイズ。リスト内のアイコンなどに使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-avatar-size-md</code></td><td class="ngde">48px</td><td class="ngde">中サイズ。標準的なアバター表示に使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-avatar-size-lg</code></td><td class="ngde">80px</td><td class="ngde">大サイズ。カード内メイン画像などに使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">xl</code></td><td class="ngde"><code class="ngde">--pt-avatar-size-xl</code></td><td class="ngde">120px</td><td class="ngde">特大サイズ。プロフィール画面などに使用。</td></tr></tbody></table></div><h3 id="radius" href="components/avatar/style" headinglink="true" class="ngde">Radius<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="radius"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">circle</code></td><td class="ngde"><code class="ngde">--pt-avatar-radius-circle</code></td><td class="ngde"><code class="ngde">\{radius.full\}</code></td><td class="ngde"></td><td class="ngde">完全な円形。ユーザーアバター用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">rounded</code></td><td class="ngde"><code class="ngde">--pt-avatar-radius-rounded</code></td><td class="ngde"><code class="ngde">\{radius.lg\}</code></td><td class="ngde"></td><td class="ngde">角丸。サムネイル用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">square</code></td><td class="ngde"><code class="ngde">--pt-avatar-radius-square</code></td><td class="ngde"><code class="ngde">\{radius.sm\}</code></td><td class="ngde"></td><td class="ngde">小さい角丸。ピクセルアート用。</td></tr></tbody></table></div><!-- @auto-generated:token-table:end --><h2 id="layout-specifications" href="components/avatar/style" headinglink="true" class="ngde">Layout Specifications<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="layout-specifications"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Size</th><th class="ngde">Dimensions</th><th class="ngde">Use Case</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde">32×32px</td><td class="ngde">リスト内のアイコン</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde">48×48px</td><td class="ngde">標準サイズ</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde">80×80px</td><td class="ngde">カード内メイン画像</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">xl</code></td><td class="ngde">120×120px</td><td class="ngde">プロフィール画面</td></tr></tbody></table></div><hr class="ngde"><h2 id="shape-variants" href="components/avatar/style" headinglink="true" class="ngde">Shape Variants<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="shape-variants"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Shape</th><th class="ngde">border-radius</th><th class="ngde">Use Case</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">circle</code></td><td class="ngde">50%</td><td class="ngde">ユーザーアバター</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">rounded</code></td><td class="ngde"><code class="ngde">--pt-radius-lg</code></td><td class="ngde">サムネイル</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">square</code></td><td class="ngde"><code class="ngde">--pt-radius-sm</code></td><td class="ngde">ピクセルアート</td></tr></tbody></table></div><hr class="ngde"><h2 id="related-tokens" href="components/avatar/style" headinglink="true" class="ngde">Related Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related-tokens"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">design-tokens/tier3-component/avatar.json</code>: コンポーネントトークン定義</li></ul>`

@Component({
  selector: 'ng-doc-page-fyw4yrww',
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

