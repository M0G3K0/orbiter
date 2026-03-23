// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/stack/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<stack-playground [direction]="properties['direction']" [gap]="properties['gap']" [align]="properties['align']" [justify]="properties['justify']"></stack-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['StackPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'stack-playground';

    @ViewChild(pageEntity.playgrounds['StackPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['StackPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['StackPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['StackPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('StackPlayground', PlaygroundComponent1),
];
