// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/text/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="design-tokens" href="components/text/style" headinglink="true" class="ngde">Design Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="design-tokens"></ng-doc-heading-anchor></h2><p class="ngde"><code class="ngde">pt-text</code>は以下のデザイントークンを使用します。</p><!-- @auto-generated:token-table:start --><h3 id="color" href="components/text/style" headinglink="true" class="ngde">Color<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="color"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">primary</code></td><td class="ngde"><code class="ngde">--pt-text-color-primary</code></td><td class="ngde"><code class="ngde">\{color.text.primary\}</code></td><td class="ngde"></td><td class="ngde">主要テキスト色。<code class="ngde">color</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">secondary</code></td><td class="ngde"><code class="ngde">--pt-text-color-secondary</code></td><td class="ngde"><code class="ngde">\{color.text.secondary\}</code></td><td class="ngde"></td><td class="ngde">補助テキスト色。<code class="ngde">color</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">disabled</code></td><td class="ngde"><code class="ngde">--pt-text-color-disabled</code></td><td class="ngde"><code class="ngde">\{color.text.disabled\}</code></td><td class="ngde"></td><td class="ngde">無効化テキスト色。<code class="ngde">color</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">inverse</code></td><td class="ngde"><code class="ngde">--pt-text-color-inverse</code></td><td class="ngde"><code class="ngde">\{color.text.inverse\}</code></td><td class="ngde"></td><td class="ngde">反転テキスト色（暗い背景上）。<code class="ngde">color</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">danger</code></td><td class="ngde"><code class="ngde">--pt-text-color-danger</code></td><td class="ngde"><code class="ngde">\{color.result.lose.default\}</code></td><td class="ngde"></td><td class="ngde">危険・エラーテキスト色。<code class="ngde">color</code>に適用。</td></tr></tbody></table></div><h3 id="font" href="components/text/style" headinglink="true" class="ngde">Font<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="font"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Variant</th><th class="ngde">FontFamily</th><th class="ngde">FontSize</th><th class="ngde">FontWeight</th><th class="ngde">LineHeight</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">lg</code></td><td class="ngde"><code class="ngde">--pt-text-font-lg-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-font-lg-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-font-lg-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-font-lg-line-height</code></td></tr><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-text-font-md-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-font-md-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-font-md-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-font-md-line-height</code></td></tr><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-text-font-sm-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-font-sm-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-font-sm-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-font-sm-line-height</code></td></tr></tbody></table></div><h3 id="label" href="components/text/style" headinglink="true" class="ngde">Label<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="label"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Variant</th><th class="ngde">FontFamily</th><th class="ngde">FontSize</th><th class="ngde">FontWeight</th><th class="ngde">LineHeight</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">md</code></td><td class="ngde"><code class="ngde">--pt-text-label-md-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-label-md-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-label-md-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-label-md-line-height</code></td></tr><tr class="ngde"><td class="ngde"><code class="ngde">sm</code></td><td class="ngde"><code class="ngde">--pt-text-label-sm-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-label-sm-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-label-sm-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-label-sm-line-height</code></td></tr><tr class="ngde"><td class="ngde"><code class="ngde">xs</code></td><td class="ngde"><code class="ngde">--pt-text-label-xs-font-family</code></td><td class="ngde"><code class="ngde">--pt-text-label-xs-font-size</code></td><td class="ngde"><code class="ngde">--pt-text-label-xs-font-weight</code></td><td class="ngde"><code class="ngde">--pt-text-label-xs-line-height</code></td></tr></tbody></table></div><h3 id="weight" href="components/text/style" headinglink="true" class="ngde">Weight<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="weight"></ng-doc-heading-anchor></h3><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th class="ngde">Key</th><th class="ngde">Token</th><th class="ngde">Reference</th><th class="ngde">Value</th><th class="ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><code class="ngde">normal</code></td><td class="ngde"><code class="ngde">--pt-text-weight-normal</code></td><td class="ngde"><code class="ngde">\{font.weight.normal\}</code></td><td class="ngde"></td><td class="ngde">通常ウェイト (400)。<code class="ngde">font-weight</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">medium</code></td><td class="ngde"><code class="ngde">--pt-text-weight-medium</code></td><td class="ngde"><code class="ngde">\{font.weight.medium\}</code></td><td class="ngde"></td><td class="ngde">中ウェイト (500)。<code class="ngde">font-weight</code>に適用。</td></tr><tr class="ngde"><td class="ngde"><code class="ngde">bold</code></td><td class="ngde"><code class="ngde">--pt-text-weight-bold</code></td><td class="ngde"><code class="ngde">\{font.weight.bold\}</code></td><td class="ngde"></td><td class="ngde">太字 (700)。<code class="ngde">font-weight</code>に適用。</td></tr></tbody></table></div><!-- @auto-generated:token-table:end --><h2 id="related-tokens" href="components/text/style" headinglink="true" class="ngde">Related Tokens<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related-tokens"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">design-tokens/tier2-semantic/typography.json</code>: タイポグラフィトークン</li><li class="ngde"><code class="ngde">design-tokens/tier2-semantic/color.json</code>: 色トークン</li></ul>`

@Component({
  selector: 'ng-doc-page-c35xzzsi',
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

