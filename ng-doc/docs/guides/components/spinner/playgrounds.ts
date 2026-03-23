// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/spinner/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<spinner-playground [size]="properties['size']" [variant]="properties['variant']" [ariaLabel]="properties['ariaLabel']"></spinner-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['SpinnerPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'spinner-playground';

    @ViewChild(pageEntity.playgrounds['SpinnerPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['SpinnerPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['SpinnerPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['SpinnerPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('SpinnerPlayground', PlaygroundComponent1),
];
