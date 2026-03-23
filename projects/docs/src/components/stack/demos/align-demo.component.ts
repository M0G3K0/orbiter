import { Component } from '@angular/core';
import { StackComponent } from 'ui';
import { SurfaceComponent } from 'ui';
import { TextComponent } from 'ui';

/**
 * Demo: Stack Align & Justify
 */
@Component({
	selector: 'stack-align-demo',
	standalone: true,
	imports: [StackComponent, SurfaceComponent, TextComponent],
	template: `
		<div class="demo-container">
			<orb-text variant="label-sm" color="secondary">justify="between"</orb-text>
			<orb-stack direction="horizontal" gap="md" justify="between">
				<orb-surface variant="subtle" padding="sm" radius="sm">
					<orb-text variant="body-md">左</orb-text>
				</orb-surface>
				<orb-surface variant="subtle" padding="sm" radius="sm">
					<orb-text variant="body-md">右</orb-text>
				</orb-surface>
			</orb-stack>
		</div>
		<div class="demo-container">
			<orb-text variant="label-sm" color="secondary">align="center"</orb-text>
			<orb-stack direction="horizontal" gap="md" align="center">
				<orb-surface variant="subtle" padding="lg" radius="sm">
					<orb-text variant="body-md">大</orb-text>
				</orb-surface>
				<orb-surface variant="subtle" padding="sm" radius="sm">
					<orb-text variant="body-md">小</orb-text>
				</orb-surface>
			</orb-stack>
		</div>
	`,
	styles: [`
		:host {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
		.demo-container {
			display: flex;
			flex-direction: column;
			gap: 4px;
		}
	`],
})
export class StackAlignDemoComponent { }
