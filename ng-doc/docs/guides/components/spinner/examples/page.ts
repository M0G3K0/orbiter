// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/spinner/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="sizes" href="components/spinner/examples" headinglink="true" class="ngde">Sizes<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sizes"></ng-doc-heading-anchor></h2><p class="ngde">3種類のサイズバリエーション（sm / md / lg）：</p><ng-doc-demo componentname="SpinnerSizesDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="variants" href="components/spinner/examples" headinglink="true" class="ngde">Variants<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="variants"></ng-doc-heading-anchor></h2><p class="ngde">2種類の色バリエーション（primary / secondary）：</p><ng-doc-demo componentname="SpinnerVariantsDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-5kkooa7o',
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

