// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/chip/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<chip-playground [size]="properties['size']" [rounded]="properties['rounded']"></chip-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['ChipPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'chip-playground';

    @ViewChild(pageEntity.playgrounds['ChipPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['ChipPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['ChipPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['ChipPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('ChipPlayground', PlaygroundComponent1),
];
