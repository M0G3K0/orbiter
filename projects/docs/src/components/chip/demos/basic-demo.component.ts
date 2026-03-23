import { Component } from '@angular/core';
import { ChipComponent } from 'ui';

@Component({
  selector: 'chip-basic-demo',
  standalone: true,
  imports: [ChipComponent],
  template: `
    <orb-chip 
      rounded="md"
      size="md">
      Chip
    </orb-chip>
  `,
  styles: [`
    :host {
      --orb-chip-bg: var(--orb-color-surface-pressed);
      --orb-chip-text: var(--orb-color-text-primary);
    }
  `],
})
export class ChipBasicDemoComponent { }
