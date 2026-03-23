// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/text/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<text-playground [text]="properties['text']" [variant]="properties['variant']" [color]="properties['color']" [weight]="properties['weight']" [transform]="properties['transform']" [element]="properties['element']" [italic]="properties['italic']" [align]="properties['align']"></text-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['TextPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'text-playground';

    @ViewChild(pageEntity.playgrounds['TextPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['TextPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['TextPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['TextPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('TextPlayground', PlaygroundComponent1),
];
