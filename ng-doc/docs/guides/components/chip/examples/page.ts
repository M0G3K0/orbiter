// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/chip/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="basic" href="components/chip/examples" headinglink="true" class="ngde">Basic<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="basic"></ng-doc-heading-anchor></h2><p class="ngde">基本的なChipの表示：</p><ng-doc-demo componentname="ChipBasicDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><hr class="ngde"><h2 id="sizes" href="components/chip/examples" headinglink="true" class="ngde">Sizes<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sizes"></ng-doc-heading-anchor></h2><p class="ngde">2種類のサイズバリエーション（sm / md）：</p><ng-doc-demo componentname="ChipSizesDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><hr class="ngde"><h2 id="rounded-variants" href="components/chip/examples" headinglink="true" class="ngde">Rounded Variants<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="rounded-variants"></ng-doc-heading-anchor></h2><p class="ngde">4種類の角丸バリエーション（none / sm / md / full）：</p><ng-doc-demo componentname="ChipRoundedDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-sg3onzpy',
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

