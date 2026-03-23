// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/stack/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="design-tokens" href="components/stack/style" headinglink="true" class="ngde">Design Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="design-tokens"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde">pt-stack</code>は以下のデザイントークンを使用します。</p><!-- @auto-generated:token-table:start --><h3 id="gap" href="components/stack/style" headinglink="true" class="ngde">Gap<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="gap"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">none</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-none</code></td><td class="ngde"></td><td class="ngde">0</td><td class="ngde">ギャップなし。要素同士を密着させる場合に使用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">xs</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-xs</code></td><td class="ngde"><code class="ngde">\{spacing.gap.xs\}</code></td><td class="ngde"></td><td class="ngde">極小ギャップ。アイコンとラベルなど密接な要素間。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-sm</code></td><td class="ngde"><code class="ngde">\{spacing.gap.sm\}</code></td><td class="ngde"></td><td class="ngde">小ギャップ。関連性の高い要素間。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-md</code></td><td class="ngde"><code class="ngde">\{spacing.gap.md\}</code></td><td class="ngde"></td><td class="ngde">中ギャップ。標準的な要素間。デフォルト値。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-lg</code></td><td class="ngde"><code class="ngde">\{spacing.gap.lg\}</code></td><td class="ngde"></td><td class="ngde">大ギャップ。セクション内の区切り。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">xl</code></td><td class="ngde"><code class="ngde">--pt-stack-gap-xl</code></td><td class="ngde"><code class="ngde">\{spacing.gap.xl\}</code></td><td class="ngde"></td><td class="ngde">特大ギャップ。セクション間の明確な分割。</td></tr></tbody></table></div><!-- @auto-generated:token-table:end --><h2 id="related-tokens" href="components/stack/style" headinglink="true" class="ngde">Related Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related-tokens"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">design-tokens/tier3-component/stack.json</code>: コンポーネントトークン定義</li></ul>`

@Component({
  selector: 'ng-doc-page-sav9iahu',
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

