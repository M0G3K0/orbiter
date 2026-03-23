// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/stack/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="playground" href="components/stack/api" headinglink="true" class="ngde">Playground<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="playground"></ng-doc-heading-anchor></h2><ng-doc-playground id="StackPlayground" indexable="false" class="ngde"><div id="selectors" class="ngde">stack-playground</div><div id="pipeName" class="ngde"></div><div id="data" class="ngde">\{"direction":\{"inputName":"direction","type":"'vertical' | 'horizontal' | 'responsive'","description":"","options":["'vertical'","'horizontal'","'responsive'"]\},"gap":\{"inputName":"gap","type":"'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xs'","description":"","options":["'none'","'sm'","'md'","'lg'","'xl'","'xs'"]\},"align":\{"inputName":"align","type":"'start' | 'center' | 'end' | 'stretch'","description":"","options":["'start'","'center'","'end'","'stretch'"]\},"justify":\{"inputName":"justify","type":"'start' | 'center' | 'end' | 'between'","description":"","options":["'start'","'center'","'end'","'between'"]\}\}</div><div id="options" class="ngde">\{\}</div></ng-doc-playground><hr class="ngde"><h2 id="api-reference" href="components/stack/api" headinglink="true" class="ngde">API Reference<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="api-reference"></ng-doc-heading-anchor></h2><p class="ngde"><ng-doc-keyword-scope id="StackComponent" title="StackComponent" class="ngde"></ng-doc-keyword-scope></p><h2 id="properties" href="components/stack/api" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="align" data-slugtype="member"><td indexable="false" class="ngde"><div class="ng-doc-decorators-group column ngde" indexable="false"><code class="ngde">@Input</code></div><span class="ngde">align</span><div class="ng-doc-node-details ngde"></div></td><td class="ng-doc-api-table-type ngde"><code indexable="false" class="ngde">"start" | "center" | "end" | "stretch"</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Align items on cross axis @default 'stretch'</p></td></tr><tr class="ngde" data-slug="direction" data-slugtype="member"><td indexable="false" class="ngde"><div class="ng-doc-decorators-group column ngde" indexable="false"><code class="ngde">@Input</code></div><span class="ngde">direction</span><div class="ng-doc-node-details ngde"></div></td><td class="ng-doc-api-table-type ngde"><code indexable="false" class="ngde">"vertical" | "horizontal" | "responsive"</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Stacking direction</p><ul class="ngde"><li class="ngde">vertical: column</li><li class="ngde">horizontal: row</li><li class="ngde">responsive: column on mobile, row on sm+ @default 'vertical'</li></ul></td></tr><tr class="ngde" data-slug="gap" data-slugtype="member"><td indexable="false" class="ngde"><div class="ng-doc-decorators-group column ngde" indexable="false"><code class="ngde">@Input</code></div><span class="ngde">gap</span><div class="ng-doc-node-details ngde"></div></td><td class="ng-doc-api-table-type ngde"><code indexable="false" class="ngde">"none" | "xs" | "sm" | "md" | "lg" | "xl"</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Gap between items @default 'md'</p></td></tr><tr class="ngde" data-slug="justify" data-slugtype="member"><td indexable="false" class="ngde"><div class="ng-doc-decorators-group column ngde" indexable="false"><code class="ngde">@Input</code></div><span class="ngde">justify</span><div class="ng-doc-node-details ngde"></div></td><td class="ng-doc-api-table-type ngde"><code indexable="false" class="ngde">"start" | "center" | "end" | "between"</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Justify content on main axis @default 'start'</p></td></tr></tbody></table></div><h2 id="accessors" href="components/stack/api" headinglink="true" class="ngde">Accessors<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="accessors"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slug="get-containerClasses" data-slugtype="member" data-slugtitle="containerClasses" id="get-containerclasses" href="components/stack/api" headinglink="true" class="ngde"><span class="ng-doc-modifier ngde" indexable="false" data-content="get">get</span> containerClasses<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="get-containerclasses"></ng-doc-heading-anchor></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><div class="ng-doc-api-status ngde"></div><p class="ngde">Container element classes</p></td></tr><tr class="ngde"><td indexable="false" class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde">Presentation</h5><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">get </span><span style="color:#6F42C1;--shiki-dark:#FFB454" class="ngde">containerClasses</span><span style="color:#24292E;--shiki-dark:#BFBDB6" class="ngde">(): string[]</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre></td></tr><tr class="ngde"><td indexable="false" class="ngde"><h5 class="no-anchor ng-doc-secondary-heading ngde">Type</h5><p class="ngde"><code indexable="false" class="ngde">string[]</code></p></td></tr></tbody></table></div><p class="ngde"></p><hr class="ngde"><h2 id="details" href="components/stack/api" headinglink="true" class="ngde">Details<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="details"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table no-padding no-full-width ngde"><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">Decorators:</td><td indexable="false" class="ngde"><code indexable="false" class="ngde">@Component</code></td></tr><tr class="ngde"><td indexable="false" class="ngde">Selectors:</td><td class="ngde"><code class="ngde">orb-stack</code></td></tr></tbody></table></div><hr class="ngde"><h2 id="related" href="components/stack/api" headinglink="true" class="ngde">Related<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="related"></ng-doc-heading-anchor></h2><ul class="ngde"><li class="ngde"><code class="ngde">pt-grid</code>: 規則的なグリッドレイアウト</li><li class="ngde"><code class="ngde">pt-surface</code>: 背景・枠線などのコンテナスタイリング</li></ul>`

@Component({
  selector: 'ng-doc-page-k4crg3lm',
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
  title: `API`,
}]

export default routes;

