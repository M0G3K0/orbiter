// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/avatar/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<avatar-playground [src]="properties['src']" [alt]="properties['alt']" [size]="properties['size']" [shape]="properties['shape']" [pixelated]="properties['pixelated']"></avatar-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['AvatarPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'avatar-playground';

    @ViewChild(pageEntity.playgrounds['AvatarPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['AvatarPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['AvatarPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['AvatarPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('AvatarPlayground', PlaygroundComponent1),
];
