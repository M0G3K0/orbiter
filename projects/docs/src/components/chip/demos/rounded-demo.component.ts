import { Component } from '@angular/core';
import { ChipComponent } from 'ui';
import { CHIP_ROUNDED, ChipRounded } from 'ui';

@Component({
  selector: 'chip-rounded-demo',
  standalone: true,
  imports: [ChipComponent],
  template: `
    @for (rounded of roundedVariants; track rounded) {
      <orb-chip 
        [rounded]="rounded"
        size="md">
        {{ rounded }}
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
export class ChipRoundedDemoComponent {
  readonly roundedVariants: ChipRounded[] = CHIP_ROUNDED;
}
