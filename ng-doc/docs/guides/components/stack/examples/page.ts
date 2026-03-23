// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/stack/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="direction" href="components/stack/examples" headinglink="true" class="ngde">Direction<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="direction"></ng-doc-heading-anchor></h2><p class="ngde">3種類の方向（vertical / horizontal / responsive）：</p><ng-doc-demo componentname="StackDirectionDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="gap" href="components/stack/examples" headinglink="true" class="ngde">Gap<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="gap"></ng-doc-heading-anchor></h2><p class="ngde">6種類のギャップ（none / xs / sm / md / lg / xl）：</p><ng-doc-demo componentname="StackGapDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="align--justify" href="components/stack/examples" headinglink="true" class="ngde">Align &#x26; Justify<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="align--justify"></ng-doc-heading-anchor></h2><p class="ngde">配置と整列：</p><ng-doc-demo componentname="StackAlignDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-0ezp42t9',
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

