// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/surface/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<surface-playground [content]="properties['content']" [variant]="properties['variant']" [padding]="properties['padding']" [radius]="properties['radius']" [border]="properties['border']"></surface-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['SurfacePlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'surface-playground';

    @ViewChild(pageEntity.playgrounds['SurfacePlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['SurfacePlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['SurfacePlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['SurfacePlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('SurfacePlayground', PlaygroundComponent1),
];
