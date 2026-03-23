// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/card/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="basic" href="components/card/examples" headinglink="true" class="ngde">Basic<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="basic"></ng-doc-heading-anchor></h2><p class="ngde">基本的なカード構造（ヘッダー + コンテンツ + フッター）：</p><ng-doc-demo componentname="CardBasicDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="elevation" href="components/card/examples" headinglink="true" class="ngde">Elevation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="elevation"></ng-doc-heading-anchor></h2><p class="ngde">3種類の影（flat / raised / floating）：</p><ng-doc-demo componentname="CardElevationDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="sizes" href="components/card/examples" headinglink="true" class="ngde">Sizes<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sizes"></ng-doc-heading-anchor></h2><p class="ngde">3種類のサイズ（sm / md / lg）：</p><ng-doc-demo componentname="CardSizesDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-wmjk6wkp',
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

