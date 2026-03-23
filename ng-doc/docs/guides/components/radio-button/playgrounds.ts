// @ts-nocheck
import {ChangeDetectionStrategy, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NgDocBasePlayground, providePlaygroundDemo} from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../projects/docs/src/components/radio-button/ng-doc.page';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'ng-doc-playground-1',
    template: `
		<radio-button-playground [label]="properties['label']" [value]="properties['value']" [selected]="properties['selected']" [disabled]="properties['disabled']" [feedbackState]="properties['feedbackState']"></radio-button-playground>
	`,
    imports: [
        CommonModule,
        pageEntity.playgrounds['RadioButtonPlayground'].target,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
    static readonly selector: string = 'radio-button-playground';

    @ViewChild(pageEntity.playgrounds['RadioButtonPlayground'].target, {static: true})
    readonly playground: Type<any>;

    @ViewChild(pageEntity.playgrounds['RadioButtonPlayground'].target, {static: true, read: ViewContainerRef})
    readonly viewContainerRef: ViewContainerRef;

    readonly configData: any = pageEntity.playgrounds['RadioButtonPlayground'].data;

    constructor() {
        super(pageEntity.playgrounds['RadioButtonPlayground'].target);
    }
}

export const PLAYGROUND_COMPONENTS = [
    PlaygroundComponent1,
];

export const PLAYGROUND_PROVIDERS = [
    providePlaygroundDemo('RadioButtonPlayground', PlaygroundComponent1),
];
