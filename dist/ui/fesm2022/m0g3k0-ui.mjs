import * as i0 from '@angular/core';
import { Input, Component, EventEmitter, Output, HostBinding, inject, forwardRef, HostListener } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';

/**
 * orb-avatar (Molecule): 画像を表示するためのアバターコンポーネント
 *
 * ユーザープロフィール画像、サムネイル、アイコン的な画像表示に使用。
 * 複数のサイズ・形状バリアントをサポートし、ピクセルアート表示にも対応。
 *
 * 背景色やシャドウなどの装飾は、使用箇所で親要素を使って対応してください。
 * 将来的に orb-surface / orb-paper コンポーネントを導入予定。
 *
 * @example
 * ```html
 * <orb-avatar
 *   src="/images/profile.png"
 *   alt="ユーザー名"
 *   size="lg"
 *   shape="rounded"
 *   [pixelated]="true">
 * </orb-avatar>
 * ```
 *
 * @see https://primer.style/components/avatar - GitHub Primer Avatar
 */
class AvatarComponent {
    /** 画像のURL（必須） */
    src;
    /** 代替テキスト（アクセシビリティ必須） */
    alt;
    /** サイズバリアント */
    size = 'md';
    /** 形状バリアント */
    shape = 'circle';
    /** ピクセルアート用のレンダリング（レトロゲーム画像など） */
    pixelated = false;
    /** コンテナ要素のクラス一覧 */
    get containerClasses() {
        return [
            'orb-avatar',
            `orb-avatar--${this.size}`,
            `orb-avatar--${this.shape}`,
        ];
    }
    /** 画像要素のクラス一覧 */
    get imageClasses() {
        const classes = ['orb-avatar__image'];
        if (this.pixelated) {
            classes.push('orb-avatar__image--pixelated');
        }
        return classes;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: AvatarComponent, isStandalone: true, selector: "orb-avatar", inputs: { src: "src", alt: "alt", size: "size", shape: "shape", pixelated: "pixelated" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\r\n\t<img [src]=\"src\" [alt]=\"alt\" [ngClass]=\"imageClasses\" loading=\"lazy\">\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:inline-block;line-height:0}.orb-avatar{display:inline-block;overflow:hidden}.orb-avatar--sm{width:var(--orb-avatar-size-sm);height:var(--orb-avatar-size-sm)}.orb-avatar--md{width:var(--orb-avatar-size-md);height:var(--orb-avatar-size-md)}.orb-avatar--lg{width:var(--orb-avatar-size-lg);height:var(--orb-avatar-size-lg)}.orb-avatar--xl{width:var(--orb-avatar-size-xl);height:var(--orb-avatar-size-xl)}.orb-avatar--circle{border-radius:var(--orb-avatar-radius-circle)}.orb-avatar--rounded{border-radius:var(--orb-avatar-radius-rounded)}.orb-avatar--square{border-radius:var(--orb-avatar-radius-square)}.orb-avatar__image{width:100%;height:100%;object-fit:contain}.orb-avatar__image--pixelated{image-rendering:pixelated}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-avatar', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\r\n\t<img [src]=\"src\" [alt]=\"alt\" [ngClass]=\"imageClasses\" loading=\"lazy\">\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:inline-block;line-height:0}.orb-avatar{display:inline-block;overflow:hidden}.orb-avatar--sm{width:var(--orb-avatar-size-sm);height:var(--orb-avatar-size-sm)}.orb-avatar--md{width:var(--orb-avatar-size-md);height:var(--orb-avatar-size-md)}.orb-avatar--lg{width:var(--orb-avatar-size-lg);height:var(--orb-avatar-size-lg)}.orb-avatar--xl{width:var(--orb-avatar-size-xl);height:var(--orb-avatar-size-xl)}.orb-avatar--circle{border-radius:var(--orb-avatar-radius-circle)}.orb-avatar--rounded{border-radius:var(--orb-avatar-radius-rounded)}.orb-avatar--square{border-radius:var(--orb-avatar-radius-square)}.orb-avatar__image{width:100%;height:100%;object-fit:contain}.orb-avatar__image--pixelated{image-rendering:pixelated}\n"] }]
        }], propDecorators: { src: [{
                type: Input,
                args: [{ required: true }]
            }], alt: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }], pixelated: [{
                type: Input
            }] } });

/**
 * ボタンコンポーネント
 *
 * 一貫したボタンUIを提供する自己完結型コンポーネント。
 * アクションの実行を促すUIに使用する。
 *
 * @example
 * ```html
 * <orb-button variant="primary" size="md">送信</orb-button>
 * <orb-button variant="danger" size="sm" [disabled]="true">削除</orb-button>
 * ```
 */
class ButtonComponent {
    /** ボタンの色バリエーション */
    variant = 'primary';
    /** ボタンのサイズ */
    size = 'md';
    /** 無効状態 */
    disabled = false;
    /** クリックイベント */
    buttonClick = new EventEmitter();
    get buttonClasses() {
        return [
            'orb-button',
            `orb-button--${this.size}`,
            `orb-button--${this.variant}`,
        ].join(' ');
    }
    handleClick(event) {
        if (!this.disabled) {
            this.buttonClick.emit(event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: ButtonComponent, isStandalone: true, selector: "orb-button", inputs: { variant: "variant", size: "size", disabled: "disabled" }, outputs: { buttonClick: "buttonClick" }, ngImport: i0, template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `, isInline: true, styles: ["@charset \"UTF-8\";:host{display:inline-block}.orb-button{display:inline-flex;align-items:center;justify-content:center;gap:var(--orb-button-gap);border:none;cursor:pointer;font-family:var(--orb-font-family-sans);font-size:var(--orb-font-size-sm);font-weight:var(--orb-font-weight-medium);line-height:var(--orb-font-line-height-tight);letter-spacing:.02em;border-radius:var(--orb-button-radius);transition:all var(--orb-button-interaction-duration) var(--orb-button-interaction-easing)}.orb-button:focus-visible{outline:2px solid var(--orb-color-border-focused);outline-offset:2px}.orb-button{transition:transform var(--orb-motion-duration-quick) var(--orb-motion-easing-default)}.orb-button:active:not(:disabled){transform:scale(.97)}.orb-button:disabled{opacity:.5;cursor:not-allowed}.orb-button--sm{padding:var(--orb-button-padding-y-sm) var(--orb-button-padding-x-sm);font-size:var(--orb-button-font-size-sm);min-height:32px}.orb-button--md{padding:var(--orb-button-padding-y-md) var(--orb-button-padding-x-md);font-size:var(--orb-button-font-size-md);min-height:40px}.orb-button--lg{padding:var(--orb-button-padding-y-lg) var(--orb-button-padding-x-lg);font-size:var(--orb-button-font-size-lg);min-height:48px}.orb-button--primary{background-color:var(--orb-button-primary-bg-default);color:var(--orb-button-primary-text-default)}.orb-button--primary:hover:not(:disabled){background-color:var(--orb-button-primary-bg-hover)}.orb-button--primary:active:not(:disabled){background-color:var(--orb-button-primary-bg-pressed)}.orb-button--secondary{background-color:var(--orb-button-secondary-bg-default);color:var(--orb-button-secondary-text-default);border:1px solid var(--orb-button-secondary-border-default)}.orb-button--secondary:hover:not(:disabled){background-color:var(--orb-button-secondary-bg-hover);border-color:var(--orb-button-secondary-border-hover)}.orb-button--secondary:active:not(:disabled){background-color:var(--orb-button-secondary-bg-pressed)}.orb-button--danger{background-color:var(--orb-button-danger-bg-default);color:var(--orb-button-danger-text-default)}.orb-button--danger:hover:not(:disabled){background-color:var(--orb-button-danger-bg-hover)}.orb-button--danger:active:not(:disabled){background-color:var(--orb-button-danger-bg-pressed)}.orb-button--ghost{background-color:var(--orb-button-ghost-bg-default);color:var(--orb-button-ghost-text-default)}.orb-button--ghost:hover:not(:disabled){background-color:var(--orb-button-ghost-bg-hover)}.orb-button--ghost:active:not(:disabled){background-color:var(--orb-button-ghost-bg-pressed)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-button', standalone: true, template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `, styles: ["@charset \"UTF-8\";:host{display:inline-block}.orb-button{display:inline-flex;align-items:center;justify-content:center;gap:var(--orb-button-gap);border:none;cursor:pointer;font-family:var(--orb-font-family-sans);font-size:var(--orb-font-size-sm);font-weight:var(--orb-font-weight-medium);line-height:var(--orb-font-line-height-tight);letter-spacing:.02em;border-radius:var(--orb-button-radius);transition:all var(--orb-button-interaction-duration) var(--orb-button-interaction-easing)}.orb-button:focus-visible{outline:2px solid var(--orb-color-border-focused);outline-offset:2px}.orb-button{transition:transform var(--orb-motion-duration-quick) var(--orb-motion-easing-default)}.orb-button:active:not(:disabled){transform:scale(.97)}.orb-button:disabled{opacity:.5;cursor:not-allowed}.orb-button--sm{padding:var(--orb-button-padding-y-sm) var(--orb-button-padding-x-sm);font-size:var(--orb-button-font-size-sm);min-height:32px}.orb-button--md{padding:var(--orb-button-padding-y-md) var(--orb-button-padding-x-md);font-size:var(--orb-button-font-size-md);min-height:40px}.orb-button--lg{padding:var(--orb-button-padding-y-lg) var(--orb-button-padding-x-lg);font-size:var(--orb-button-font-size-lg);min-height:48px}.orb-button--primary{background-color:var(--orb-button-primary-bg-default);color:var(--orb-button-primary-text-default)}.orb-button--primary:hover:not(:disabled){background-color:var(--orb-button-primary-bg-hover)}.orb-button--primary:active:not(:disabled){background-color:var(--orb-button-primary-bg-pressed)}.orb-button--secondary{background-color:var(--orb-button-secondary-bg-default);color:var(--orb-button-secondary-text-default);border:1px solid var(--orb-button-secondary-border-default)}.orb-button--secondary:hover:not(:disabled){background-color:var(--orb-button-secondary-bg-hover);border-color:var(--orb-button-secondary-border-hover)}.orb-button--secondary:active:not(:disabled){background-color:var(--orb-button-secondary-bg-pressed)}.orb-button--danger{background-color:var(--orb-button-danger-bg-default);color:var(--orb-button-danger-text-default)}.orb-button--danger:hover:not(:disabled){background-color:var(--orb-button-danger-bg-hover)}.orb-button--danger:active:not(:disabled){background-color:var(--orb-button-danger-bg-pressed)}.orb-button--ghost{background-color:var(--orb-button-ghost-bg-default);color:var(--orb-button-ghost-text-default)}.orb-button--ghost:hover:not(:disabled){background-color:var(--orb-button-ghost-bg-hover)}.orb-button--ghost:active:not(:disabled){background-color:var(--orb-button-ghost-bg-pressed)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], buttonClick: [{
                type: Output
            }] } });

/**
 * カードコンポーネント
 *
 * 関連するコンテンツをグループ化するコンテナ。
 * 情報の階層を視覚的に表現する。
 *
 * @example
 * ```html
 * <orb-card size="md" elevation="raised">
 *   <h2>タイトル</h2>
 *   <p>コンテンツ</p>
 * </orb-card>
 * ```
 */
class CardComponent {
    /** カードのパディングサイズ */
    size = 'md';
    /** カードの影の強さ */
    elevation = 'raised';
    get cardClasses() {
        return [
            'orb-card',
            `orb-card--${this.size}`,
            `orb-card--${this.elevation}`,
        ].join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: CardComponent, isStandalone: true, selector: "orb-card", inputs: { size: "size", elevation: "elevation" }, ngImport: i0, template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: ["@charset \"UTF-8\";:host{display:block}.orb-card{overflow:hidden;background-color:var(--orb-card-bg-default);border-radius:var(--orb-card-radius);border:1px solid var(--orb-card-border-default);box-shadow:var(--orb-card-shadow-raised)}.orb-card--sm{padding:var(--orb-card-padding-sm)}.orb-card--md{padding:var(--orb-card-padding-md)}.orb-card--lg{padding:var(--orb-card-padding-lg)}.orb-card:has(orb-card-header),.orb-card:has(orb-card-content),.orb-card:has(orb-card-footer){padding:0}.orb-card--flat{box-shadow:var(--orb-card-shadow-flat)}.orb-card--raised{box-shadow:var(--orb-card-shadow-raised)}.orb-card--overlay{box-shadow:var(--orb-card-shadow-overlay)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-card', standalone: true, template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `, styles: ["@charset \"UTF-8\";:host{display:block}.orb-card{overflow:hidden;background-color:var(--orb-card-bg-default);border-radius:var(--orb-card-radius);border:1px solid var(--orb-card-border-default);box-shadow:var(--orb-card-shadow-raised)}.orb-card--sm{padding:var(--orb-card-padding-sm)}.orb-card--md{padding:var(--orb-card-padding-md)}.orb-card--lg{padding:var(--orb-card-padding-lg)}.orb-card:has(orb-card-header),.orb-card:has(orb-card-content),.orb-card:has(orb-card-footer){padding:0}.orb-card--flat{box-shadow:var(--orb-card-shadow-flat)}.orb-card--raised{box-shadow:var(--orb-card-shadow-raised)}.orb-card--overlay{box-shadow:var(--orb-card-shadow-overlay)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], elevation: [{
                type: Input
            }] } });

/**
 * カードヘッダーコンポーネント
 *
 * カードのタイトル・見出しエリア。
 * 下部にボーダーを持ち、コンテンツと視覚的に分離される。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-header>
 *     <h2>タイトル</h2>
 *   </orb-card-header>
 *   <orb-card-content>...</orb-card-content>
 * </orb-card>
 * ```
 */
class CardHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: CardHeaderComponent, isStandalone: true, selector: "orb-card-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block;padding:var(--orb-card-section-padding);border-bottom:1px solid var(--orb-card-section-separator)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-card-header', standalone: true, template: `<ng-content></ng-content>`, styles: [":host{display:block;padding:var(--orb-card-section-padding);border-bottom:1px solid var(--orb-card-section-separator)}\n"] }]
        }] });

/**
 * カードコンテンツコンポーネント
 *
 * カードのメインコンテンツエリア。
 * 本文、説明文、フォームなどを配置する。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-header>...</orb-card-header>
 *   <orb-card-content>
 *     <p>本文テキスト</p>
 *   </orb-card-content>
 * </orb-card>
 * ```
 */
class CardContentComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: CardContentComponent, isStandalone: true, selector: "orb-card-content", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block;padding:var(--orb-card-section-padding)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-card-content', standalone: true, template: `<ng-content></ng-content>`, styles: [":host{display:block;padding:var(--orb-card-section-padding)}\n"] }]
        }] });

/**
 * カードフッターコンポーネント
 *
 * カードのアクションエリア。
 * ボタンやリンクなどの操作要素を配置する。
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-content>...</orb-card-content>
 *   <orb-card-footer>
 *     <orb-button>保存</orb-button>
 *     <orb-button variant="ghost">キャンセル</orb-button>
 *   </orb-card-footer>
 * </orb-card>
 * ```
 */
class CardFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: CardFooterComponent, isStandalone: true, selector: "orb-card-footer", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:flex;gap:var(--orb-card-section-gap);padding:var(--orb-card-section-padding);border-top:1px solid var(--orb-card-section-separator);justify-content:flex-end}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: CardFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-card-footer', standalone: true, template: `<ng-content></ng-content>`, styles: [":host{display:flex;gap:var(--orb-card-section-gap);padding:var(--orb-card-section-padding);border-top:1px solid var(--orb-card-section-separator);justify-content:flex-end}\n"] }]
        }] });

/**
 * orb-card コンポーネント群
 *
 * Compound Componentsパターンでカードを構成
 *
 * @example
 * ```html
 * <orb-card>
 *   <orb-card-header>タイトル</orb-card-header>
 *   <orb-card-content>本文</orb-card-content>
 *   <orb-card-footer>
 *     <orb-button>アクション</orb-button>
 *   </orb-card-footer>
 * </orb-card>
 * ```
 */

/**
 * Icon component for displaying icons with optional color support
 *
 * @example
 * <!-- Type color -->
 * <orb-icon [src]="'/icons/fire.svg'" size="md" color="fire"></orb-icon>
 *
 * <!-- Inverse (white) for dark backgrounds -->
 * <orb-icon [src]="'/icons/fire.svg'" size="md" color="inverse"></orb-icon>
 *
 * <!-- Inherit parent color (default) -->
 * <orb-icon [src]="'/icons/fire.svg'" size="md"></orb-icon>
 *
 * @reference
 * - Atomic Design: Atom (Generic component)
 * - GitHub Primer: https://primer.style/components/icon
 * - SmartHR Design System: https://smarthr.design/products/components/icon/
 */
class IconComponent {
    /**
     * Image URL for icon
     */
    src;
    /**
     * Size of the icon
     * @default 'md'
     */
    size = 'md';
    /**
     * Alternative text for accessibility
     * @default '' (decorative icon)
     */
    alt = '';
    /**
     * Color of the icon
     * - PokemonType: Applies the type's color (e.g., 'fire', 'water')
     * - 'inverse': White color for dark backgrounds
     * - undefined: Inherits parent color via currentColor (default)
     */
    color;
    /**
     * Icon element classes
     */
    get iconClasses() {
        return ['orb-icon', `orb-icon--${this.size}`];
    }
    /**
     * Computed color value for CSS mask mode
     * Returns CSS variable or null if no color is set
     */
    get iconColor() {
        if (!this.color)
            return null;
        if (this.color === 'inverse')
            return 'var(--orb-color-text-inverse)';
        return `var(--orb-color-pokemon-${this.color}-500)`;
    }
    /**
     * CSS mask-image URL for color mode
     */
    get maskImageUrl() {
        return `url(${this.src})`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.6", type: IconComponent, isStandalone: true, selector: "orb-icon", inputs: { src: "src", size: "size", alt: "alt", color: "color" }, ngImport: i0, template: "@if (color) {\r\n<!-- Color mode: CSS mask -->\r\n<div [ngClass]=\"iconClasses\" [style.background-color]=\"iconColor\" [style.mask-image]=\"maskImageUrl\"\r\n\t[style.-webkit-mask-image]=\"maskImageUrl\" role=\"img\" [attr.aria-label]=\"alt || null\"></div>\r\n} @else {\r\n<!-- Legacy mode: img tag (backward compatible) -->\r\n<img [ngClass]=\"iconClasses\" [src]=\"src\" [alt]=\"alt\">\r\n}", styles: ["@charset \"UTF-8\";:host{display:inline-block;line-height:0}.orb-icon{display:block;object-fit:contain;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center}.orb-icon--xs{width:var(--orb-icon-size-xs);height:var(--orb-icon-size-xs)}.orb-icon--sm{width:var(--orb-icon-size-sm);height:var(--orb-icon-size-sm)}.orb-icon--md{width:var(--orb-icon-size-md);height:var(--orb-icon-size-md)}.orb-icon--lg{width:var(--orb-icon-size-lg);height:var(--orb-icon-size-lg)}.orb-icon--xl{width:var(--orb-icon-size-xl);height:var(--orb-icon-size-xl)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-icon', standalone: true, imports: [CommonModule], template: "@if (color) {\r\n<!-- Color mode: CSS mask -->\r\n<div [ngClass]=\"iconClasses\" [style.background-color]=\"iconColor\" [style.mask-image]=\"maskImageUrl\"\r\n\t[style.-webkit-mask-image]=\"maskImageUrl\" role=\"img\" [attr.aria-label]=\"alt || null\"></div>\r\n} @else {\r\n<!-- Legacy mode: img tag (backward compatible) -->\r\n<img [ngClass]=\"iconClasses\" [src]=\"src\" [alt]=\"alt\">\r\n}", styles: ["@charset \"UTF-8\";:host{display:inline-block;line-height:0}.orb-icon{display:block;object-fit:contain;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center}.orb-icon--xs{width:var(--orb-icon-size-xs);height:var(--orb-icon-size-xs)}.orb-icon--sm{width:var(--orb-icon-size-sm);height:var(--orb-icon-size-sm)}.orb-icon--md{width:var(--orb-icon-size-md);height:var(--orb-icon-size-md)}.orb-icon--lg{width:var(--orb-icon-size-lg);height:var(--orb-icon-size-lg)}.orb-icon--xl{width:var(--orb-icon-size-xl);height:var(--orb-icon-size-xl)}\n"] }]
        }], propDecorators: { src: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], alt: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

/**
 * Icon component variant types
 * @generated by scripts/tokens/generate-types-from-tokens.mjs
 * Do not edit manually - run `npm run tokens:build` to regenerate
 */
/** Available icon size variants */
const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Chip component for displaying compact information units
 *
 * 色はCSS変数 `--orb-chip-bg` / `--orb-chip-text` で外部から注入される。
 * このコンポーネントは「形」のみを担当し、色の決定権は持たない。
 *
 * @example
 * <!-- orb-type-chip 等のラッパーコンポーネント経由で使用 -->
 * <orb-type-chip [type]="'fire'" [showIcon]="true">ほのお</orb-type-chip>
 *
 * @reference
 * - Atomic Design: Molecule (Generic flexible component)
 * - Material Design 3 Chips: https://m3.material.io/components/chips/overview
 * - GitHub Primer Labels: https://primer.style/components/label
 */
class ChipComponent {
    /**
     * Chip size
     * @default 'md'
     */
    size = 'md';
    /**
     * Border radius
     * @default 'md'
     */
    rounded = 'md';
    /**
     * Leading icon (left side)
     */
    icon;
    /**
     * Icon size adjustment
     */
    iconSize;
    /**
     * Icon-only mode (square chip with uniform padding)
     * @default false
     */
    iconOnly = false;
    /**
     * Get computed icon size based on chip size
     * チップ内アイコンは高密度UIのため、通常より1段階小さいサイズを使用
     */
    get computedIconSize() {
        if (this.iconSize) {
            return this.iconSize;
        }
        // Icon-only mode uses matching icons
        if (this.iconOnly) {
            switch (this.size) {
                case 'sm':
                    return 'sm';
                case 'lg':
                    return 'md';
                case 'md':
                default:
                    return 'sm';
            }
        }
        // Default: チップ内はテキストと並ぶため、1段階小さいサイズ
        switch (this.size) {
            case 'sm':
                return 'xs'; // sm chip → xs icon (16px)
            case 'lg':
                return 'sm'; // lg chip → sm icon (20px)
            case 'md':
            default:
                return 'xs'; // md chip → xs icon (16px)
        }
    }
    /**
     * Container element classes
     */
    get containerClasses() {
        return [
            'orb-chip',
            `orb-chip--${this.size}`,
            `orb-chip--rounded-${this.rounded}`,
        ];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: ChipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.6", type: ChipComponent, isStandalone: true, selector: "orb-chip", inputs: { size: "size", rounded: "rounded", icon: "icon", iconSize: "iconSize", iconOnly: "iconOnly" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\r\n\t<!-- Leading Icon -->\r\n\t@if (icon) {\r\n\t<orb-icon [src]=\"icon\" [size]=\"computedIconSize\"></orb-icon>\r\n\t}\r\n\r\n\t<!-- Text Content -->\r\n\t<span class=\"orb-chip__text\">\r\n\t\t<ng-content></ng-content>\r\n\t</span>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:inline-block}.orb-chip{display:inline-flex;align-items:center;gap:var(--orb-chip-gap);font-weight:var(--orb-chip-font-weight);white-space:nowrap;background-color:var(--orb-chip-bg);color:var(--orb-chip-text)}.orb-chip--sm{padding:var(--orb-chip-padding-x-sm);font-size:var(--orb-chip-font-size-sm)}.orb-chip--md{padding:var(--orb-chip-padding-x-md);font-size:var(--orb-chip-font-size-md)}.orb-chip--rounded-none{border-radius:var(--orb-chip-radius-none)}.orb-chip--rounded-sm{border-radius:var(--orb-chip-radius-sm)}.orb-chip--rounded-md{border-radius:var(--orb-chip-radius-md)}.orb-chip--rounded-full{border-radius:var(--orb-chip-radius-full)}.orb-chip__text{line-height:normal}.orb-chip__text:empty{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: IconComponent, selector: "orb-icon", inputs: ["src", "size", "alt", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: ChipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-chip', standalone: true, imports: [CommonModule, IconComponent], template: "<div [ngClass]=\"containerClasses\">\r\n\t<!-- Leading Icon -->\r\n\t@if (icon) {\r\n\t<orb-icon [src]=\"icon\" [size]=\"computedIconSize\"></orb-icon>\r\n\t}\r\n\r\n\t<!-- Text Content -->\r\n\t<span class=\"orb-chip__text\">\r\n\t\t<ng-content></ng-content>\r\n\t</span>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:inline-block}.orb-chip{display:inline-flex;align-items:center;gap:var(--orb-chip-gap);font-weight:var(--orb-chip-font-weight);white-space:nowrap;background-color:var(--orb-chip-bg);color:var(--orb-chip-text)}.orb-chip--sm{padding:var(--orb-chip-padding-x-sm);font-size:var(--orb-chip-font-size-sm)}.orb-chip--md{padding:var(--orb-chip-padding-x-md);font-size:var(--orb-chip-font-size-md)}.orb-chip--rounded-none{border-radius:var(--orb-chip-radius-none)}.orb-chip--rounded-sm{border-radius:var(--orb-chip-radius-sm)}.orb-chip--rounded-md{border-radius:var(--orb-chip-radius-md)}.orb-chip--rounded-full{border-radius:var(--orb-chip-radius-full)}.orb-chip__text{line-height:normal}.orb-chip__text:empty{display:none}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], rounded: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }] } });

/**
 * Chip component variant types
 * @generated by scripts/tokens/generate-types-from-tokens.mjs
 * Do not edit manually - run `npm run tokens:build` to regenerate
 */
/** Available chip x variants */
const CHIP_SIZES = ['sm', 'md'];
/** Available chip radius variants */
const CHIP_ROUNDED = ['none', 'sm', 'md', 'full'];

/**
 * Grid component for CSS Grid-based layouts
 *
 * @example
 * <orb-grid [columns]="2" [smColumns]="3" gap="md">
 *   <button *ngFor="let choice of choices">...</button>
 * </orb-grid>
 *
 * @reference
 * - CSS Grid Layout: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
 */
class GridComponent {
    /** Default column count */
    static DEFAULT_COLUMNS = 2;
    /**
     * Number of columns (default/mobile)
     * @default 2
     */
    columns = GridComponent.DEFAULT_COLUMNS;
    /**
     * Number of columns on sm breakpoint (640px+)
     * If not set, uses columns value
     */
    smColumns;
    /**
     * Gap between grid items
     * @default 'md'
     */
    gap = 'md';
    /**
     * Container element classes
     */
    get containerClasses() {
        const classes = [
            'orb-grid',
            `orb-grid--cols-${this.columns}`,
            `orb-grid--gap-${this.gap}`,
        ];
        if (this.smColumns) {
            classes.push(`orb-grid--sm-cols-${this.smColumns}`);
        }
        return classes;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: GridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: GridComponent, isStandalone: true, selector: "orb-grid", inputs: { columns: "columns", smColumns: "smColumns", gap: "gap" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-grid{display:grid}.orb-grid--cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.orb-grid--cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.orb-grid--cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.orb-grid--cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.orb-grid--cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}@media(width>=40rem){.orb-grid--sm-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.orb-grid--sm-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.orb-grid--sm-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.orb-grid--sm-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.orb-grid--sm-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}.orb-grid--gap-none{gap:var(--orb-grid-gap-none)}.orb-grid--gap-sm{gap:var(--orb-grid-gap-sm)}.orb-grid--gap-md{gap:var(--orb-grid-gap-md)}.orb-grid--gap-lg{gap:var(--orb-grid-gap-lg)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: GridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-grid', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-grid{display:grid}.orb-grid--cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.orb-grid--cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.orb-grid--cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.orb-grid--cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.orb-grid--cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}@media(width>=40rem){.orb-grid--sm-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.orb-grid--sm-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.orb-grid--sm-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.orb-grid--sm-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.orb-grid--sm-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}.orb-grid--gap-none{gap:var(--orb-grid-gap-none)}.orb-grid--gap-sm{gap:var(--orb-grid-gap-sm)}.orb-grid--gap-md{gap:var(--orb-grid-gap-md)}.orb-grid--gap-lg{gap:var(--orb-grid-gap-lg)}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], smColumns: [{
                type: Input
            }], gap: [{
                type: Input
            }] } });

/**
 * orb-heading (Atom): コンテンツの階層構造を定義するタイポグラフィコンポーネント
 *
 * セマンティックなHTML見出し要素（h1-h6）を出力し、一貫したスタイリングを提供。
 * オプションでアクセントバー（左側の縦棒）を表示できる。
 *
 * セマンティックレベル（level）と視覚的サイズ（size）を分離しており、
 * h3要素でも視覚的には大きなサイズで表示するなど柔軟な使い方が可能。
 *
 * @example
 * ```html
 * <orb-heading [level]="2">セクションタイトル</orb-heading>
 *
 * <orb-heading [level]="3" [accent]="true">
 *   わざのダメージ倍率は？
 * </orb-heading>
 * ```
 *
 * @see https://primer.style/components/heading - GitHub Primer Heading
 * @see https://smarthr.design/products/components/heading/ - SmartHR Heading
 */
class HeadingComponent {
    /**
     * セマンティックな見出しレベル (h1-h6)
     * - level=1 → h1 (画面タイトル、ページに1回のみ)
     * - level=2 → h2 (セクションタイトル)
     * - level=3 → h3 (ブロックタイトル)
     * - level=4-6 → h4-h6 (サブ見出し)
     */
    level;
    /**
     * 視覚的なサイズ。指定しない場合は level から自動推論。
     * - xl: typography.heading.xl (画面タイトル相当)
     * - lg: typography.heading.lg (セクションタイトル相当)
     * - md: typography.heading.md (ブロックタイトル相当)
     * - sm: typography.heading.sm (サブ・ブロックタイトル相当)
     */
    size;
    /**
     * アクセントバー（左側の縦棒）を表示するか。
     * セクションの開始を視覚的に強調する場合に使用。
     */
    accent = false;
    /**
     * 動的クラス生成 (Approach A: Getter Pattern)
     * テンプレート内の条件分岐を排除し、ロジックをTSに集約。
     */
    get headingClasses() {
        const actualSize = this.size ?? this.defaultSizeForLevel(this.level);
        return [
            'orb-heading',
            `orb-heading--${actualSize}`,
            this.accent ? 'orb-heading--accent' : '',
        ].filter(Boolean);
    }
    /**
     * レベルからデフォルトのサイズを推論
     */
    defaultSizeForLevel(level) {
        const map = {
            1: 'xl',
            2: 'lg',
            3: 'md',
            4: 'sm',
            5: 'sm',
            6: 'sm',
        };
        return map[level];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: HeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.6", type: HeadingComponent, isStandalone: true, selector: "orb-heading", inputs: { level: "level", size: "size", accent: "accent" }, ngImport: i0, template: "<!-- \r\n  orb-heading Template\r\n  \r\n  @switch \u3067 level \u306B\u5FDC\u3058\u305F h1-h6 \u8981\u7D20\u3092\u51FA\u529B\u3002\r\n  ng-content \u306F\u8907\u6570\u306E @case \u3067\u4F7F\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\r\n  ng-template \u3067\u5171\u901A\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5B9A\u7FA9\u3057\u53C2\u7167\u3059\u308B\u3002\r\n-->\r\n<ng-template #content>\r\n\t@if (accent) {\r\n\t<span class=\"orb-heading__accent\" aria-hidden=\"true\"></span>\r\n\t}\r\n\t<ng-content></ng-content>\r\n</ng-template>\r\n\r\n@switch (level) {\r\n@case (1) {\r\n<h1 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h1>\r\n}\r\n@case (2) {\r\n<h2 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h2>\r\n}\r\n@case (3) {\r\n<h3 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h3>\r\n}\r\n@case (4) {\r\n<h4 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h4>\r\n}\r\n@case (5) {\r\n<h5 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h5>\r\n}\r\n@case (6) {\r\n<h6 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h6>\r\n}\r\n}", styles: ["@charset \"UTF-8\";:host{display:block}.orb-heading{margin:0;color:var(--orb-heading-text-color)}.orb-heading--xl{font-family:var(--orb-heading-font-xl-font-family);font-size:var(--orb-heading-font-xl-font-size);font-weight:var(--orb-heading-font-xl-font-weight);line-height:var(--orb-heading-font-xl-line-height)}.orb-heading--lg{font-family:var(--orb-heading-font-lg-font-family);font-size:var(--orb-heading-font-lg-font-size);font-weight:var(--orb-heading-font-lg-font-weight);line-height:var(--orb-heading-font-lg-line-height)}.orb-heading--md{font-family:var(--orb-heading-font-md-font-family);font-size:var(--orb-heading-font-md-font-size);font-weight:var(--orb-heading-font-md-font-weight);line-height:var(--orb-heading-font-md-line-height)}.orb-heading--sm{font-family:var(--orb-heading-font-sm-font-family);font-size:var(--orb-heading-font-sm-font-size);font-weight:var(--orb-heading-font-sm-font-weight);line-height:var(--orb-heading-font-sm-line-height)}.orb-heading--accent{display:flex;align-items:center;gap:var(--orb-heading-accent-gap)}.orb-heading__accent{flex-shrink:0;width:var(--orb-heading-accent-width);height:var(--orb-heading-accent-height);background-color:var(--orb-heading-accent-color);border-radius:var(--orb-heading-accent-radius)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: HeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-heading', standalone: true, imports: [NgClass, NgTemplateOutlet], template: "<!-- \r\n  orb-heading Template\r\n  \r\n  @switch \u3067 level \u306B\u5FDC\u3058\u305F h1-h6 \u8981\u7D20\u3092\u51FA\u529B\u3002\r\n  ng-content \u306F\u8907\u6570\u306E @case \u3067\u4F7F\u7528\u3067\u304D\u306A\u3044\u305F\u3081\u3001\r\n  ng-template \u3067\u5171\u901A\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5B9A\u7FA9\u3057\u53C2\u7167\u3059\u308B\u3002\r\n-->\r\n<ng-template #content>\r\n\t@if (accent) {\r\n\t<span class=\"orb-heading__accent\" aria-hidden=\"true\"></span>\r\n\t}\r\n\t<ng-content></ng-content>\r\n</ng-template>\r\n\r\n@switch (level) {\r\n@case (1) {\r\n<h1 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h1>\r\n}\r\n@case (2) {\r\n<h2 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h2>\r\n}\r\n@case (3) {\r\n<h3 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h3>\r\n}\r\n@case (4) {\r\n<h4 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h4>\r\n}\r\n@case (5) {\r\n<h5 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h5>\r\n}\r\n@case (6) {\r\n<h6 [ngClass]=\"headingClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</h6>\r\n}\r\n}", styles: ["@charset \"UTF-8\";:host{display:block}.orb-heading{margin:0;color:var(--orb-heading-text-color)}.orb-heading--xl{font-family:var(--orb-heading-font-xl-font-family);font-size:var(--orb-heading-font-xl-font-size);font-weight:var(--orb-heading-font-xl-font-weight);line-height:var(--orb-heading-font-xl-line-height)}.orb-heading--lg{font-family:var(--orb-heading-font-lg-font-family);font-size:var(--orb-heading-font-lg-font-size);font-weight:var(--orb-heading-font-lg-font-weight);line-height:var(--orb-heading-font-lg-line-height)}.orb-heading--md{font-family:var(--orb-heading-font-md-font-family);font-size:var(--orb-heading-font-md-font-size);font-weight:var(--orb-heading-font-md-font-weight);line-height:var(--orb-heading-font-md-line-height)}.orb-heading--sm{font-family:var(--orb-heading-font-sm-font-family);font-size:var(--orb-heading-font-sm-font-size);font-weight:var(--orb-heading-font-sm-font-weight);line-height:var(--orb-heading-font-sm-line-height)}.orb-heading--accent{display:flex;align-items:center;gap:var(--orb-heading-accent-gap)}.orb-heading__accent{flex-shrink:0;width:var(--orb-heading-accent-width);height:var(--orb-heading-accent-height);background-color:var(--orb-heading-accent-color);border-radius:var(--orb-heading-accent-radius)}\n"] }]
        }], propDecorators: { level: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], accent: [{
                type: Input
            }] } });

/**
 * orb-radio-group (Atom): ラジオボタンをグループ化するコンテナコンポーネント
 *
 * 複数の orb-radio-button をまとめ、単一選択の状態管理とレイアウトを提供。
 *
 * @example
 * ```html
 * <orb-radio-group name="difficulty" [(value)]="selectedDifficulty" layout="horizontal">
 *   <orb-radio-button [value]="'easy'">かんたん</orb-radio-button>
 *   <orb-radio-button [value]="'normal'">ふつう</orb-radio-button>
 *   <orb-radio-button [value]="'hard'">むずかしい</orb-radio-button>
 * </orb-radio-group>
 * ```
 */
class PtRadioGroupComponent {
    /**
     * Name attribute for the radio group (for form association).
     */
    name = '';
    /**
     * Currently selected value.
     */
    value = null;
    /**
     * Layout direction of the radio buttons.
     */
    layout = 'vertical';
    /**
     * Gap between radio buttons.
     */
    gap = 'md';
    /**
     * Whether the entire group is disabled.
     */
    disabled = false;
    /**
     * Emitted when the selected value changes.
     */
    valueChange = new EventEmitter();
    get hostClasses() {
        return `layout-${this.layout} gap-${this.gap}`;
    }
    role = 'radiogroup';
    get ariaDisabled() {
        return this.disabled ? 'true' : null;
    }
    ngAfterContentInit() {
        // Initialization logic if needed
    }
    /**
     * Called by child orb-radio-button when selected.
     */
    selectValue(newValue) {
        if (this.disabled)
            return;
        if (this.value !== newValue) {
            this.value = newValue;
            this.valueChange.emit(newValue);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: PtRadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: PtRadioGroupComponent, isStandalone: true, selector: "orb-radio-group", inputs: { name: "name", value: "value", layout: "layout", gap: "gap", disabled: "disabled" }, outputs: { valueChange: "valueChange" }, host: { properties: { "class": "this.hostClasses", "attr.role": "this.role", "attr.aria-disabled": "this.ariaDisabled" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:flex}:host(.layout-vertical){flex-direction:column}:host(.layout-horizontal){flex-direction:row;flex-wrap:wrap}:host(.gap-sm){gap:var(--orb-spacing-gap-sm)}:host(.gap-md){gap:var(--orb-spacing-gap-md)}:host(.gap-lg){gap:var(--orb-spacing-gap-lg)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: PtRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-radio-group', standalone: true, imports: [CommonModule], template: `<ng-content></ng-content>`, styles: [":host{display:flex}:host(.layout-vertical){flex-direction:column}:host(.layout-horizontal){flex-direction:row;flex-wrap:wrap}:host(.gap-sm){gap:var(--orb-spacing-gap-sm)}:host(.gap-md){gap:var(--orb-spacing-gap-md)}:host(.gap-lg){gap:var(--orb-spacing-gap-lg)}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }], value: [{
                type: Input
            }], layout: [{
                type: Input
            }], gap: [{
                type: Input
            }], disabled: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }] } });

/**
 * orb-radio-button (Atom): 単一選択肢を表すラジオボタンコンポーネント
 *
 * 複数の選択肢から1つを選択する RadioButton パターンを提供。
 * feedbackState により正解/不正解などの検証結果を視覚的に表現可能。
 *
 * @example
 * ```html
 * <orb-radio-button [value]="1" [feedbackState]="'correct'">
 *   <orb-text variant="body-lg">1</orb-text>
 * </orb-radio-button>
 * ```
 */
class PtRadioButtonComponent {
    /**
     * The value of this radio button.
     * Compared with the parent group's value to determine selection.
     */
    value;
    /**
     * Whether this radio button is disabled.
     */
    disabled = false;
    /**
     * Feedback state for visual indication of results (e.g., correct/wrong in quizzes).
     */
    feedbackState = 'default';
    /**
     * Whether this radio button is currently selected.
     * Can be set directly or managed by orb-radio-group.
     */
    selected = false;
    /**
     * Emitted when this radio button is clicked/selected.
     */
    radioSelect = new EventEmitter();
    group = inject(forwardRef(() => PtRadioGroupComponent), { optional: true });
    get isSelected() {
        // feedbackState が設定されている場合は selected クラスを付けない
        // （feedback スタイルが優先されるようにする）
        if (this.feedbackState !== 'default') {
            return false;
        }
        if (this.group) {
            return this.group.value === this.value;
        }
        return this.selected;
    }
    get isDisabled() {
        return this.disabled || (this.group?.disabled ?? false);
    }
    get isFeedbackCorrect() {
        return this.feedbackState === 'correct';
    }
    get isFeedbackWrong() {
        return this.feedbackState === 'wrong';
    }
    get isFeedbackActual() {
        return this.feedbackState === 'actual';
    }
    role = 'radio';
    get ariaChecked() {
        return this.isSelected ? 'true' : 'false';
    }
    get ariaDisabled() {
        return this.isDisabled ? 'true' : null;
    }
    get tabIndex() {
        return this.isDisabled ? -1 : 0;
    }
    onClick() {
        if (this.isDisabled)
            return;
        this.radioSelect.emit(this.value);
        this.group?.selectValue(this.value);
    }
    onKeydown(event) {
        event.preventDefault();
        this.onClick();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: PtRadioButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: PtRadioButtonComponent, isStandalone: true, selector: "orb-radio-button", inputs: { value: "value", disabled: "disabled", feedbackState: "feedbackState", selected: "selected" }, outputs: { radioSelect: "radioSelect" }, host: { listeners: { "click": "onClick()", "keydown.space": "onKeydown($event)", "keydown.enter": "onKeydown($event)" }, properties: { "class.selected": "this.isSelected", "class.disabled": "this.isDisabled", "class.feedback-correct": "this.isFeedbackCorrect", "class.feedback-wrong": "this.isFeedbackWrong", "class.feedback-actual": "this.isFeedbackActual", "attr.role": "this.role", "attr.aria-checked": "this.ariaChecked", "attr.aria-disabled": "this.ariaDisabled", "attr.tabindex": "this.tabIndex" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:flex;flex-direction:row;align-items:baseline;justify-content:center;padding:var(--orb-radio-button-padding-y) var(--orb-radio-button-padding-x);border-radius:var(--orb-radio-button-radius);border:var(--orb-radio-button-border-width) solid var(--orb-radio-button-default-border);background-color:var(--orb-radio-button-default-bg);color:var(--orb-radio-button-default-text);cursor:pointer;transition:all var(--orb-motion-duration-quick) var(--orb-motion-easing-default);box-shadow:var(--orb-radio-button-shadow-default);-webkit-user-select:none;user-select:none;outline:none}:host(:hover:not(.disabled):not(.selected)){border-color:var(--orb-radio-button-hover-border);background-color:var(--orb-radio-button-hover-bg)}:host(:active:not(.disabled)){transform:scale(.95)}:host(:focus-visible){outline:2px solid var(--orb-radio-button-focus-ring);outline-offset:2px}:host(.selected){background-color:var(--orb-radio-button-selected-bg);border-color:var(--orb-radio-button-selected-border);color:var(--orb-radio-button-selected-text);transform:scale(1.05);box-shadow:var(--orb-radio-button-shadow-selected)}:host(.selected) ::ng-deep *{color:inherit!important}:host(.feedback-correct),:host(.feedback-correct.disabled){background-color:var(--orb-radio-button-feedback-correct-bg);border-color:var(--orb-radio-button-feedback-correct-border);color:var(--orb-radio-button-feedback-correct-text);opacity:1;cursor:default}:is(:host(.feedback-correct),:host(.feedback-correct.disabled)) ::ng-deep *{color:inherit!important}:host(.feedback-wrong),:host(.feedback-wrong.disabled){background-color:var(--orb-radio-button-feedback-wrong-bg);border-color:var(--orb-radio-button-feedback-wrong-border);color:var(--orb-radio-button-feedback-wrong-text);opacity:1;cursor:default}:is(:host(.feedback-wrong),:host(.feedback-wrong.disabled)) ::ng-deep *{color:inherit!important}:host(.feedback-actual),:host(.feedback-actual.disabled){background-color:var(--orb-radio-button-feedback-actual-bg);border-color:var(--orb-radio-button-feedback-actual-border);color:var(--orb-radio-button-feedback-actual-text);box-shadow:0 0 0 4px var(--orb-radio-button-feedback-actual-ring);opacity:1;cursor:default}:is(:host(.feedback-actual),:host(.feedback-actual.disabled)) ::ng-deep *{color:inherit!important}:host(.disabled:not(.feedback-correct):not(.feedback-wrong):not(.feedback-actual)){background-color:var(--orb-radio-button-disabled-bg);border-color:var(--orb-radio-button-disabled-border);color:var(--orb-radio-button-disabled-text);opacity:.5;cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: PtRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-radio-button', standalone: true, imports: [CommonModule], template: `<ng-content></ng-content>`, styles: [":host{display:flex;flex-direction:row;align-items:baseline;justify-content:center;padding:var(--orb-radio-button-padding-y) var(--orb-radio-button-padding-x);border-radius:var(--orb-radio-button-radius);border:var(--orb-radio-button-border-width) solid var(--orb-radio-button-default-border);background-color:var(--orb-radio-button-default-bg);color:var(--orb-radio-button-default-text);cursor:pointer;transition:all var(--orb-motion-duration-quick) var(--orb-motion-easing-default);box-shadow:var(--orb-radio-button-shadow-default);-webkit-user-select:none;user-select:none;outline:none}:host(:hover:not(.disabled):not(.selected)){border-color:var(--orb-radio-button-hover-border);background-color:var(--orb-radio-button-hover-bg)}:host(:active:not(.disabled)){transform:scale(.95)}:host(:focus-visible){outline:2px solid var(--orb-radio-button-focus-ring);outline-offset:2px}:host(.selected){background-color:var(--orb-radio-button-selected-bg);border-color:var(--orb-radio-button-selected-border);color:var(--orb-radio-button-selected-text);transform:scale(1.05);box-shadow:var(--orb-radio-button-shadow-selected)}:host(.selected) ::ng-deep *{color:inherit!important}:host(.feedback-correct),:host(.feedback-correct.disabled){background-color:var(--orb-radio-button-feedback-correct-bg);border-color:var(--orb-radio-button-feedback-correct-border);color:var(--orb-radio-button-feedback-correct-text);opacity:1;cursor:default}:is(:host(.feedback-correct),:host(.feedback-correct.disabled)) ::ng-deep *{color:inherit!important}:host(.feedback-wrong),:host(.feedback-wrong.disabled){background-color:var(--orb-radio-button-feedback-wrong-bg);border-color:var(--orb-radio-button-feedback-wrong-border);color:var(--orb-radio-button-feedback-wrong-text);opacity:1;cursor:default}:is(:host(.feedback-wrong),:host(.feedback-wrong.disabled)) ::ng-deep *{color:inherit!important}:host(.feedback-actual),:host(.feedback-actual.disabled){background-color:var(--orb-radio-button-feedback-actual-bg);border-color:var(--orb-radio-button-feedback-actual-border);color:var(--orb-radio-button-feedback-actual-text);box-shadow:0 0 0 4px var(--orb-radio-button-feedback-actual-ring);opacity:1;cursor:default}:is(:host(.feedback-actual),:host(.feedback-actual.disabled)) ::ng-deep *{color:inherit!important}:host(.disabled:not(.feedback-correct):not(.feedback-wrong):not(.feedback-actual)){background-color:var(--orb-radio-button-disabled-bg);border-color:var(--orb-radio-button-disabled-border);color:var(--orb-radio-button-disabled-text);opacity:.5;cursor:not-allowed}\n"] }]
        }], propDecorators: { value: [{
                type: Input,
                args: [{ required: true }]
            }], disabled: [{
                type: Input
            }], feedbackState: [{
                type: Input
            }], selected: [{
                type: Input
            }], radioSelect: [{
                type: Output
            }], isSelected: [{
                type: HostBinding,
                args: ['class.selected']
            }], isDisabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }], isFeedbackCorrect: [{
                type: HostBinding,
                args: ['class.feedback-correct']
            }], isFeedbackWrong: [{
                type: HostBinding,
                args: ['class.feedback-wrong']
            }], isFeedbackActual: [{
                type: HostBinding,
                args: ['class.feedback-actual']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], ariaChecked: [{
                type: HostBinding,
                args: ['attr.aria-checked']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown.space', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }] } });

/**
 * Spinner component for loading states
 *
 * @example
 * <orb-spinner size="md" variant="primary"></orb-spinner>
 *
 * @reference
 * - Material Design 3: https://m3.material.io/components/progress-indicators/overview
 * - GitHub Primer: https://primer.style/design/components/spinner
 * - SmartHR: https://smarthr.design/products/components/spinner/
 */
class SpinnerComponent {
    /**
     * Size of the spinner
     * @default 'md'
     */
    size = 'md';
    /**
     * Color variant of the spinner
     * @default 'primary'
     */
    variant = 'primary';
    /**
     * Accessible label for screen readers
     * @default 'Loading...'
     */
    ariaLabel = 'Loading...';
    /**
     * Container element classes
     */
    get containerClasses() {
        return [
            'orb-spinner',
            `orb-spinner--${this.size}`,
            `orb-spinner--${this.variant}`,
        ];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: SpinnerComponent, isStandalone: true, selector: "orb-spinner", inputs: { size: "size", variant: "variant", ariaLabel: "ariaLabel" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\" role=\"status\" [attr.aria-label]=\"ariaLabel\">\r\n  <div class=\"orb-spinner__circle\"></div>\r\n</div>", styles: [".orb-spinner{display:inline-block}.orb-spinner__circle{border-radius:50%;animation:orb-spinner-rotate var(--orb-spinner-animation-duration) linear infinite;border-style:solid;border-color:var(--orb-spinner-color-track)}.orb-spinner--sm .orb-spinner__circle{width:var(--orb-spinner-size-sm);height:var(--orb-spinner-size-sm);border-width:var(--orb-spinner-border-width-sm)}.orb-spinner--md .orb-spinner__circle{width:var(--orb-spinner-size-md);height:var(--orb-spinner-size-md);border-width:var(--orb-spinner-border-width-md)}.orb-spinner--lg .orb-spinner__circle{width:var(--orb-spinner-size-lg);height:var(--orb-spinner-size-lg);border-width:var(--orb-spinner-border-width-lg)}.orb-spinner--primary .orb-spinner__circle{border-top-color:var(--orb-spinner-color-primary)}.orb-spinner--secondary .orb-spinner__circle{border-top-color:var(--orb-spinner-color-secondary)}@keyframes orb-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-spinner', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\" role=\"status\" [attr.aria-label]=\"ariaLabel\">\r\n  <div class=\"orb-spinner__circle\"></div>\r\n</div>", styles: [".orb-spinner{display:inline-block}.orb-spinner__circle{border-radius:50%;animation:orb-spinner-rotate var(--orb-spinner-animation-duration) linear infinite;border-style:solid;border-color:var(--orb-spinner-color-track)}.orb-spinner--sm .orb-spinner__circle{width:var(--orb-spinner-size-sm);height:var(--orb-spinner-size-sm);border-width:var(--orb-spinner-border-width-sm)}.orb-spinner--md .orb-spinner__circle{width:var(--orb-spinner-size-md);height:var(--orb-spinner-size-md);border-width:var(--orb-spinner-border-width-md)}.orb-spinner--lg .orb-spinner__circle{width:var(--orb-spinner-size-lg);height:var(--orb-spinner-size-lg);border-width:var(--orb-spinner-border-width-lg)}.orb-spinner--primary .orb-spinner__circle{border-top-color:var(--orb-spinner-color-primary)}.orb-spinner--secondary .orb-spinner__circle{border-top-color:var(--orb-spinner-color-secondary)}@keyframes orb-spinner-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], variant: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

/**
 * Stack component for flexbox-based layouts
 *
 * @example
 * <orb-stack direction="vertical" gap="lg" align="center">
 *   <orb-avatar ...></orb-avatar>
 *   <h2>ピカチュウ</h2>
 * </orb-stack>
 *
 * @reference
 * - Chakra UI Stack: https://chakra-ui.com/docs/components/stack
 * - Material UI Stack: https://mui.com/material-ui/react-stack/
 */
class StackComponent {
    /**
     * Stacking direction
     * - vertical: column
     * - horizontal: row
     * - responsive: column on mobile, row on sm+
     * @default 'vertical'
     */
    direction = 'vertical';
    /**
     * Gap between items
     * @default 'md'
     */
    gap = 'md';
    /**
     * Align items on cross axis
     * @default 'stretch'
     */
    align = 'stretch';
    /**
     * Justify content on main axis
     * @default 'start'
     */
    justify = 'start';
    /**
     * Container element classes
     */
    get containerClasses() {
        return [
            'orb-stack',
            `orb-stack--${this.direction}`,
            `orb-stack--gap-${this.gap}`,
            `orb-stack--align-${this.align}`,
            `orb-stack--justify-${this.justify}`,
        ];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: StackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: StackComponent, isStandalone: true, selector: "orb-stack", inputs: { direction: "direction", gap: "gap", align: "align", justify: "justify" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-stack{display:flex}.orb-stack--vertical{flex-direction:column}.orb-stack--horizontal{flex-direction:row}.orb-stack--responsive{flex-direction:column}@media(width>=40rem){.orb-stack--responsive{flex-direction:row}}.orb-stack--gap-none{gap:var(--orb-stack-gap-none)}.orb-stack--gap-xs{gap:var(--orb-stack-gap-xs)}.orb-stack--gap-sm{gap:var(--orb-stack-gap-sm)}.orb-stack--gap-md{gap:var(--orb-stack-gap-md)}.orb-stack--gap-lg{gap:var(--orb-stack-gap-lg)}.orb-stack--gap-xl{gap:var(--orb-stack-gap-xl)}.orb-stack--align-start{align-items:flex-start}.orb-stack--align-center{align-items:center}.orb-stack--align-end{align-items:flex-end}.orb-stack--align-stretch{align-items:stretch}.orb-stack--justify-start{justify-content:flex-start}.orb-stack--justify-center{justify-content:center}.orb-stack--justify-end{justify-content:flex-end}.orb-stack--justify-between{justify-content:space-between}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: StackComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-stack', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-stack{display:flex}.orb-stack--vertical{flex-direction:column}.orb-stack--horizontal{flex-direction:row}.orb-stack--responsive{flex-direction:column}@media(width>=40rem){.orb-stack--responsive{flex-direction:row}}.orb-stack--gap-none{gap:var(--orb-stack-gap-none)}.orb-stack--gap-xs{gap:var(--orb-stack-gap-xs)}.orb-stack--gap-sm{gap:var(--orb-stack-gap-sm)}.orb-stack--gap-md{gap:var(--orb-stack-gap-md)}.orb-stack--gap-lg{gap:var(--orb-stack-gap-lg)}.orb-stack--gap-xl{gap:var(--orb-stack-gap-xl)}.orb-stack--align-start{align-items:flex-start}.orb-stack--align-center{align-items:center}.orb-stack--align-end{align-items:flex-end}.orb-stack--align-stretch{align-items:stretch}.orb-stack--justify-start{justify-content:flex-start}.orb-stack--justify-center{justify-content:center}.orb-stack--justify-end{justify-content:flex-end}.orb-stack--justify-between{justify-content:space-between}\n"] }]
        }], propDecorators: { direction: [{
                type: Input
            }], gap: [{
                type: Input
            }], align: [{
                type: Input
            }], justify: [{
                type: Input
            }] } });

/**
 * Surface component for container styling (background, border, radius, padding)
 *
 * @example
 * <orb-surface variant="subtle" padding="lg" radius="xl">
 *   <!-- content -->
 * </orb-surface>
 *
 * @reference
 * - Material UI Paper: https://mui.com/material-ui/react-paper/
 * - Radix UI Box: https://www.radix-ui.com/primitives
 */
class SurfaceComponent {
    /**
     * Visual variant
     * - default: white background
     * - subtle: light gray background
     * - card: white with shadow
     * - ghost: transparent
     * @default 'default'
     */
    variant = 'default';
    /**
     * Inner padding
     * @default 'md'
     */
    padding = 'md';
    /**
     * Border radius
     * @default 'md'
     */
    radius = 'md';
    /**
     * Show border
     * @default false
     */
    border = false;
    /**
     * Container element classes
     */
    get containerClasses() {
        const classes = [
            'orb-surface',
            `orb-surface--${this.variant}`,
            `orb-surface--padding-${this.padding}`,
            `orb-surface--radius-${this.radius}`,
        ];
        if (this.border) {
            classes.push('orb-surface--border');
        }
        return classes;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: SurfaceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.6", type: SurfaceComponent, isStandalone: true, selector: "orb-surface", inputs: { variant: "variant", padding: "padding", radius: "radius", border: "border" }, ngImport: i0, template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-surface{display:block}.orb-surface--default{background-color:var(--orb-surface-variant-default-background)}.orb-surface--subtle{background-color:var(--orb-surface-variant-subtle-background)}.orb-surface--card{background-color:var(--orb-surface-variant-card-background);box-shadow:var(--orb-surface-variant-card-elevation)}.orb-surface--ghost{background-color:transparent}.orb-surface--padding-none{padding:var(--orb-surface-padding-none)}.orb-surface--padding-sm{padding:var(--orb-surface-padding-sm)}.orb-surface--padding-md{padding:var(--orb-surface-padding-md)}.orb-surface--padding-lg{padding:var(--orb-surface-padding-lg)}.orb-surface--radius-none{border-radius:var(--orb-surface-radius-none)}.orb-surface--radius-sm{border-radius:var(--orb-surface-radius-sm)}.orb-surface--radius-md{border-radius:var(--orb-surface-radius-md)}.orb-surface--radius-lg{border-radius:var(--orb-surface-radius-lg)}.orb-surface--radius-xl{border-radius:var(--orb-surface-radius-xl)}.orb-surface--radius-full{border-radius:var(--orb-surface-radius-full)}.orb-surface--border{border:var(--orb-surface-border-width) solid var(--orb-surface-border-color)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: SurfaceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-surface', standalone: true, imports: [CommonModule], template: "<div [ngClass]=\"containerClasses\">\r\n\t<ng-content></ng-content>\r\n</div>", styles: [".orb-surface{display:block}.orb-surface--default{background-color:var(--orb-surface-variant-default-background)}.orb-surface--subtle{background-color:var(--orb-surface-variant-subtle-background)}.orb-surface--card{background-color:var(--orb-surface-variant-card-background);box-shadow:var(--orb-surface-variant-card-elevation)}.orb-surface--ghost{background-color:transparent}.orb-surface--padding-none{padding:var(--orb-surface-padding-none)}.orb-surface--padding-sm{padding:var(--orb-surface-padding-sm)}.orb-surface--padding-md{padding:var(--orb-surface-padding-md)}.orb-surface--padding-lg{padding:var(--orb-surface-padding-lg)}.orb-surface--radius-none{border-radius:var(--orb-surface-radius-none)}.orb-surface--radius-sm{border-radius:var(--orb-surface-radius-sm)}.orb-surface--radius-md{border-radius:var(--orb-surface-radius-md)}.orb-surface--radius-lg{border-radius:var(--orb-surface-radius-lg)}.orb-surface--radius-xl{border-radius:var(--orb-surface-radius-xl)}.orb-surface--radius-full{border-radius:var(--orb-surface-radius-full)}.orb-surface--border{border:var(--orb-surface-border-width) solid var(--orb-surface-border-color)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], padding: [{
                type: Input
            }], radius: [{
                type: Input
            }], border: [{
                type: Input
            }] } });

/**
 * orb-text (Atom): 本文・ラベル・補助テキスト用のタイポグラフィコンポーネント
 *
 * Design Tokens (Tier 2/3) に定義されたスタイルを一貫して適用。
 * 独自CSSクラス（.quiz-phase-label 等）の撲滅を目的とする。
 *
 * セマンティックな見出し（h1-h6）が必要な場合は orb-heading を使用すること。
 *
 * @example
 * ```html
 * <!-- 標準本文 -->
 * <orb-text>これは標準の本文テキストです。</orb-text>
 *
 * <!-- メタラベル -->
 * <orb-text variant="label-xs" color="secondary" transform="uppercase">
 *   Phase 0: Battle Trial
 * </orb-text>
 *
 * <!-- 強調テキスト -->
 * <orb-text variant="body-lg" weight="bold">{{ pokemon.name }}</orb-text>
 * ```
 *
 * @see orb-heading - 構造的な見出しが必要な場合
 * @see https://primer.style/components/text - GitHub Primer Text
 * @see https://smarthr.design/products/components/text/ - SmartHR Text
 */
class TextComponent {
    /**
     * テキストのセマンティックなバリエーション
     * - body-lg: リードパラグラフ、強調説明文
     * - body-md: 標準本文 (default)
     * - body-sm: 注釈、メタ情報
     * - label-md: ボタン、ナビゲーション
     * - label-sm: タグ、バッジ
     * - label-xs: メタデータ、ステータス
     */
    variant = 'body-md';
    /**
     * テキストの色
     * - primary: メインテキスト (default)
     * - secondary: 補助テキスト
     * - disabled: 無効状態
     * - inverse: 反転（暗い背景上）
     * - danger: エラー・警告
     */
    color = 'primary';
    /**
     * フォントの太さ（オプション）
     * 指定しない場合は variant のデフォルトを使用。
     */
    weight;
    /**
     * テキスト変換
     */
    transform = 'none';
    /**
     * 出力するHTML要素
     * - span: インライン (default)
     * - p: パラグラフ
     * - div: ブロック
     * - label: フォームラベル
     */
    element = 'span';
    /**
     * イタリック体
     */
    italic = false;
    /**
     * テキスト揃え
     */
    align = 'start';
    /**
     * 動的クラス生成
     */
    get textClasses() {
        return {
            'orb-text': true,
            [`orb-text--${this.variant}`]: true,
            [`orb-text--color-${this.color}`]: true,
            [`orb-text--weight-${this.weight}`]: !!this.weight,
            [`orb-text--transform-${this.transform}`]: this.transform !== 'none',
            'orb-text--italic': this.italic,
            [`orb-text--align-${this.align}`]: this.align !== 'start',
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.6", type: TextComponent, isStandalone: true, selector: "orb-text", inputs: { variant: "variant", color: "color", weight: "weight", transform: "transform", element: "element", italic: "italic", align: "align" }, ngImport: i0, template: "@switch (element) {\r\n@case ('p') {\r\n<p [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</p>\r\n}\r\n@case ('div') {\r\n<div [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</div>\r\n}\r\n@case ('label') {\r\n<label [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</label>\r\n}\r\n@default {\r\n<span [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</span>\r\n}\r\n}\r\n\r\n<ng-template #content>\r\n\t<ng-content></ng-content>\r\n</ng-template>", styles: ["@charset \"UTF-8\";:host{display:inline}.orb-text{margin:0;padding:0}.orb-text--body-lg{font-family:var(--orb-text-font-lg-font-family);font-size:var(--orb-text-font-lg-font-size);font-weight:var(--orb-text-font-lg-font-weight);line-height:var(--orb-text-font-lg-line-height)}.orb-text--body-md{font-family:var(--orb-text-font-md-font-family);font-size:var(--orb-text-font-md-font-size);font-weight:var(--orb-text-font-md-font-weight);line-height:var(--orb-text-font-md-line-height)}.orb-text--body-sm{font-family:var(--orb-text-font-sm-font-family);font-size:var(--orb-text-font-sm-font-size);font-weight:var(--orb-text-font-sm-font-weight);line-height:var(--orb-text-font-sm-line-height)}.orb-text--label-md{font-family:var(--orb-text-label-md-font-family);font-size:var(--orb-text-label-md-font-size);font-weight:var(--orb-text-label-md-font-weight);line-height:var(--orb-text-label-md-line-height)}.orb-text--label-sm{font-family:var(--orb-text-label-sm-font-family);font-size:var(--orb-text-label-sm-font-size);font-weight:var(--orb-text-label-sm-font-weight);line-height:var(--orb-text-label-sm-line-height)}.orb-text--label-xs{font-family:var(--orb-text-label-xs-font-family);font-size:var(--orb-text-label-xs-font-size);font-weight:var(--orb-text-label-xs-font-weight);line-height:var(--orb-text-label-xs-line-height)}.orb-text--color-primary{color:var(--orb-text-color-primary)}.orb-text--color-secondary{color:var(--orb-text-color-secondary)}.orb-text--color-disabled{color:var(--orb-text-color-disabled)}.orb-text--color-inverse{color:var(--orb-text-color-inverse)}.orb-text--color-danger{color:var(--orb-text-color-danger)}.orb-text--weight-normal{font-weight:var(--orb-text-weight-normal)}.orb-text--weight-medium{font-weight:var(--orb-text-weight-medium)}.orb-text--weight-bold,.orb-text--weight-black{font-weight:var(--orb-text-weight-bold)}.orb-text--transform-uppercase{text-transform:uppercase;letter-spacing:.05em}.orb-text--transform-lowercase{text-transform:lowercase}.orb-text--transform-capitalize{text-transform:capitalize}.orb-text--italic{font-style:italic}.orb-text--align-center{text-align:center}.orb-text--align-end{text-align:end}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.6", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'orb-text', standalone: true, imports: [CommonModule], template: "@switch (element) {\r\n@case ('p') {\r\n<p [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</p>\r\n}\r\n@case ('div') {\r\n<div [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</div>\r\n}\r\n@case ('label') {\r\n<label [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</label>\r\n}\r\n@default {\r\n<span [ngClass]=\"textClasses\">\r\n\t<ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</span>\r\n}\r\n}\r\n\r\n<ng-template #content>\r\n\t<ng-content></ng-content>\r\n</ng-template>", styles: ["@charset \"UTF-8\";:host{display:inline}.orb-text{margin:0;padding:0}.orb-text--body-lg{font-family:var(--orb-text-font-lg-font-family);font-size:var(--orb-text-font-lg-font-size);font-weight:var(--orb-text-font-lg-font-weight);line-height:var(--orb-text-font-lg-line-height)}.orb-text--body-md{font-family:var(--orb-text-font-md-font-family);font-size:var(--orb-text-font-md-font-size);font-weight:var(--orb-text-font-md-font-weight);line-height:var(--orb-text-font-md-line-height)}.orb-text--body-sm{font-family:var(--orb-text-font-sm-font-family);font-size:var(--orb-text-font-sm-font-size);font-weight:var(--orb-text-font-sm-font-weight);line-height:var(--orb-text-font-sm-line-height)}.orb-text--label-md{font-family:var(--orb-text-label-md-font-family);font-size:var(--orb-text-label-md-font-size);font-weight:var(--orb-text-label-md-font-weight);line-height:var(--orb-text-label-md-line-height)}.orb-text--label-sm{font-family:var(--orb-text-label-sm-font-family);font-size:var(--orb-text-label-sm-font-size);font-weight:var(--orb-text-label-sm-font-weight);line-height:var(--orb-text-label-sm-line-height)}.orb-text--label-xs{font-family:var(--orb-text-label-xs-font-family);font-size:var(--orb-text-label-xs-font-size);font-weight:var(--orb-text-label-xs-font-weight);line-height:var(--orb-text-label-xs-line-height)}.orb-text--color-primary{color:var(--orb-text-color-primary)}.orb-text--color-secondary{color:var(--orb-text-color-secondary)}.orb-text--color-disabled{color:var(--orb-text-color-disabled)}.orb-text--color-inverse{color:var(--orb-text-color-inverse)}.orb-text--color-danger{color:var(--orb-text-color-danger)}.orb-text--weight-normal{font-weight:var(--orb-text-weight-normal)}.orb-text--weight-medium{font-weight:var(--orb-text-weight-medium)}.orb-text--weight-bold,.orb-text--weight-black{font-weight:var(--orb-text-weight-bold)}.orb-text--transform-uppercase{text-transform:uppercase;letter-spacing:.05em}.orb-text--transform-lowercase{text-transform:lowercase}.orb-text--transform-capitalize{text-transform:capitalize}.orb-text--italic{font-style:italic}.orb-text--align-center{text-align:center}.orb-text--align-end{text-align:end}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], color: [{
                type: Input
            }], weight: [{
                type: Input
            }], transform: [{
                type: Input
            }], element: [{
                type: Input
            }], italic: [{
                type: Input
            }], align: [{
                type: Input
            }] } });

/*
 * Public API Surface of @orbiter/ui
 */
// Components

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarComponent, ButtonComponent, CHIP_ROUNDED, CHIP_SIZES, CardComponent, CardContentComponent, CardFooterComponent, CardHeaderComponent, ChipComponent, GridComponent, HeadingComponent, ICON_SIZES, IconComponent, PtRadioButtonComponent, PtRadioGroupComponent, SpinnerComponent, StackComponent, SurfaceComponent, TextComponent };
//# sourceMappingURL=m0g3k0-ui.mjs.map
