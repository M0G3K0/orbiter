// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/grid/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="design-tokens" href="components/grid/style" headinglink="true" class="ngde">Design Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="design-tokens"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde">pt-grid</code>は以下のデザイントークンを使用します。</p><!-- @auto-generated:token-table:start --><h3 id="columns" href="components/grid/style" headinglink="true" class="ngde">Columns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="columns"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">1</code></td><td class="ngde"><code class="ngde">--pt-grid-columns-1</code></td><td class="ngde">1</td><td class="ngde">1カラム。モバイルでの単一カラム表示。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">2</code></td><td class="ngde"><code class="ngde">--pt-grid-columns-2</code></td><td class="ngde">2</td><td class="ngde">2カラム。選択肢表示のデフォルト。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">3</code></td><td class="ngde"><code class="ngde">--pt-grid-columns-3</code></td><td class="ngde">3</td><td class="ngde">3カラム。sm以上での選択肢表示。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">4</code></td><td class="ngde"><code class="ngde">--pt-grid-columns-4</code></td><td class="ngde">4</td><td class="ngde">4カラム。ギャラリー表示など。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">6</code></td><td class="ngde"><code class="ngde">--pt-grid-columns-6</code></td><td class="ngde">6</td><td class="ngde">6カラム。高密度レイアウト。</td></tr></tbody></table></div><h3 id="gap" href="components/grid/style" headinglink="true" class="ngde">Gap<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="gap"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">none</code></td><td class="ngde"><code class="ngde">--pt-grid-gap-none</code></td><td class="ngde"></td><td class="ngde">0</td><td class="ngde">ギャップなし。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-grid-gap-sm</code></td><td class="ngde"><code class="ngde">\{spacing.gap.sm\}</code></td><td class="ngde"></td><td class="ngde">小ギャップ。コンパクトなグリッド。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-grid-gap-md</code></td><td class="ngde"><code class="ngde">\{spacing.gap.md\}</code></td><td class="ngde"></td><td class="ngde">中ギャップ。標準グリッド。デフォルト値。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-grid-gap-lg</code></td><td class="ngde"><code class="ngde">\{spacing.gap.lg\}</code></td><td class="ngde"></td><td class="ngde">大ギャップ。ゆったりしたグリッド。</td></tr></tbody></table></div><!-- @auto-generated:token-table:end --><h2 id="related-tokens" href="components/grid/style" headinglink="true" class="ngde">Related Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related-tokens"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">design-tokens/tier3-component/grid.json</code>: コンポーネントトークン定義</li></ul>`

@Component({
  selector: 'ng-doc-page-pmght9fs',
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

