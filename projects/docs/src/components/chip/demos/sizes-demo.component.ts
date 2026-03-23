import { Component } from '@angular/core';
import { ChipComponent } from 'ui';
import { CHIP_SIZES, ChipSize } from 'ui';

@Component({
  selector: 'chip-sizes-demo',
  standalone: true,
  imports: [ChipComponent],
  template: `
    @for (size of sizes; track size) {
      <orb-chip 
        [size]="size"
        rounded="md">
        {{ size }}
      </orb-chip>
    }
  `,
  styles: [`
    :host {
      --orb-chip-bg: var(--orb-color-surface-pressed);
      --orb-chip-text: var(--orb-color-text-primary);
    }
  `],
})
export class ChipSizesDemoComponent {
  readonly sizes: ChipSize[] = CHIP_SIZES;
}
