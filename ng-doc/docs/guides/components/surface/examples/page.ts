// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/surface/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="variants" href="components/surface/examples" headinglink="true" class="ngde">Variants<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="variants"></ng-doc-heading-anchor></h2><p class="ngde">4種類のバリエーション（default / subtle / card / ghost）：</p><ng-doc-demo componentname="SurfaceVariantsDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="padding" href="components/surface/examples" headinglink="true" class="ngde">Padding<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="padding"></ng-doc-heading-anchor></h2><p class="ngde">4種類のパディング（none / sm / md / lg）：</p><ng-doc-demo componentname="SurfacePaddingDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="border-radius" href="components/surface/examples" headinglink="true" class="ngde">Border Radius<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="border-radius"></ng-doc-heading-anchor></h2><p class="ngde">6種類の角丸（none / sm / md / lg / xl / full）：</p><ng-doc-demo componentname="SurfaceRadiusDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-cnwj2bej',
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

