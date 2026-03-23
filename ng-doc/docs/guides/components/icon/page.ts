// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';

const headerContent: string = `<h1 class="ngde ngde" id="icon" href="components/icon" headinglink="true">Icon<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="icon"></ng-doc-heading-anchor></h1>`

@Component({
  selector: 'ng-doc-page-wrapper-nm6300ll',
  template: `<ng-doc-page-wrapper [routes]="routes" [headerContent]="headerContent" [hasBreadcrumb]="hasBreadcrumb" [pageType]="pageType"></ng-doc-page-wrapper>`,
  imports: [NgDocPageWrapperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
    routes = routes[0].children!;
    headerContent = headerContent;
    pageType: NgDocPageType = 'guide';
    hasBreadcrumb = true;
}


const routes: Routes = [{
  path: '',
  component: PageWrapperComponent,
  title: `Icon`,
  children: [
    {
      path: '',
      loadChildren: () => import('./index/page'),
      title: `Guidelines`,
      data: {
        icon: '',
      }
    },
    {
      path: 'examples',
      loadChildren: () => import('./examples/page'),
      title: `Examples`,
      data: {
        icon: '',
      }
    },
    {
      path: 'style',
      loadChildren: () => import('./style/page'),
      title: `Style`,
      data: {
        icon: '',
      }
    },
    {
      path: 'api',
      loadChildren: () => import('./api/page'),
      title: `API`,
      data: {
        icon: '',
      }
    },
  ]
}]

export default routes;
