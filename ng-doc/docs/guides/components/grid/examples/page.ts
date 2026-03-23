// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/grid/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="columns" href="components/grid/examples" headinglink="true" class="ngde">Columns<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="columns"></ng-doc-heading-anchor></h2><p class="ngde">異なるカラム数（1 / 2 / 3 / 4 / 6）：</p><ng-doc-demo componentname="GridColumnsDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="responsive" href="components/grid/examples" headinglink="true" class="ngde">Responsive<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="responsive"></ng-doc-heading-anchor></h2><p class="ngde">レスポンシブ対応（モバイル2列 → デスクトップ3列）：</p><ng-doc-demo componentname="GridResponsiveDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="gap" href="components/grid/examples" headinglink="true" class="ngde">Gap<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="gap"></ng-doc-heading-anchor></h2><p class="ngde">異なるギャップサイズ（none / sm / md / lg）：</p><ng-doc-demo componentname="GridGapDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-3oqy8oew',
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
  title: `Examples`,
}]

export default routes;

