// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';
import entry from '../../../../../../projects/docs/src/components/heading/ng-doc.page';
import {PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS} from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<h2 id="levels" href="components/heading/examples" headinglink="true" class="ngde">Levels<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="levels"></ng-doc-heading-anchor></h2><p class="ngde">6種類のセマンティックレベル（h1-h6）：</p><ng-doc-demo componentname="HeadingLevelsDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="sizes" href="components/heading/examples" headinglink="true" class="ngde">Sizes<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="sizes"></ng-doc-heading-anchor></h2><p class="ngde">4種類の視覚的サイズ（xl / lg / md / sm）：</p><ng-doc-demo componentname="HeadingSizesDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><h2 id="accent-bar" href="components/heading/examples" headinglink="true" class="ngde">Accent Bar<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="accent-bar"></ng-doc-heading-anchor></h2><p class="ngde">アクセントバー（左側の縦棒）付きの見出し：</p><ng-doc-demo componentname="HeadingAccentDemoComponent" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`

@Component({
  selector: 'ng-doc-page-j7c7vq6b',
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

