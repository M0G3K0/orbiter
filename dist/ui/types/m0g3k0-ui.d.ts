import * as i0 from '@angular/core';
import { EventEmitter, AfterContentInit } from '@angular/core';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'rounded' | 'square';
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
declare class AvatarComponent {
    /** 画像のURL（必須） */
    src: string;
    /** 代替テキスト（アクセシビリティ必須） */
    alt: string;
    /** サイズバリアント */
    size: AvatarSize;
    /** 形状バリアント */
    shape: AvatarShape;
    /** ピクセルアート用のレンダリング（レトロゲーム画像など） */
    pixelated: boolean;
    /** コンテナ要素のクラス一覧 */
    get containerClasses(): string[];
    /** 画像要素のクラス一覧 */
    get imageClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "orb-avatar", never, { "src": { "alias": "src"; "required": true; }; "alt": { "alias": "alt"; "required": true; }; "size": { "alias": "size"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "pixelated": { "alias": "pixelated"; "required": false; }; }, {}, never, never, true, never>;
}

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
declare class ButtonComponent {
    /** ボタンの色バリエーション */
    variant: 'primary' | 'secondary' | 'danger' | 'ghost';
    /** ボタンのサイズ */
    size: 'sm' | 'md' | 'lg';
    /** 無効状態 */
    disabled: boolean;
    /** クリックイベント */
    buttonClick: EventEmitter<MouseEvent>;
    get buttonClasses(): string;
    handleClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "orb-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "buttonClick": "buttonClick"; }, never, ["*"], true, never>;
}

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
declare class CardComponent {
    /** カードのパディングサイズ */
    size: 'sm' | 'md' | 'lg';
    /** カードの影の強さ */
    elevation: 'flat' | 'raised' | 'overlay';
    get cardClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "orb-card", never, { "size": { "alias": "size"; "required": false; }; "elevation": { "alias": "elevation"; "required": false; }; }, {}, never, ["*"], true, never>;
}

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
declare class CardHeaderComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<CardHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardHeaderComponent, "orb-card-header", never, {}, {}, never, ["*"], true, never>;
}

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
declare class CardContentComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<CardContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardContentComponent, "orb-card-content", never, {}, {}, never, ["*"], true, never>;
}

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
declare class CardFooterComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<CardFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardFooterComponent, "orb-card-footer", never, {}, {}, never, ["*"], true, never>;
}

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
declare class ChipComponent {
    /**
     * Chip size
     * @default 'md'
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Border radius
     * @default 'md'
     */
    rounded: 'none' | 'sm' | 'md' | 'full';
    /**
     * Leading icon (left side)
     */
    icon?: string;
    /**
     * Icon size adjustment
     */
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Icon-only mode (square chip with uniform padding)
     * @default false
     */
    iconOnly: boolean;
    /**
     * Get computed icon size based on chip size
     * チップ内アイコンは高密度UIのため、通常より1段階小さいサイズを使用
     */
    get computedIconSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Container element classes
     */
    get containerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipComponent, "orb-chip", never, { "size": { "alias": "size"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconOnly": { "alias": "iconOnly"; "required": false; }; }, {}, never, ["*"], true, never>;
}

/**
 * Chip component variant types
 * @generated by scripts/tokens/generate-types-from-tokens.mjs
 * Do not edit manually - run `npm run tokens:build` to regenerate
 */
type ChipSize = 'sm' | 'md';
/** Available chip x variants */
declare const CHIP_SIZES: ChipSize[];
type ChipRounded = 'none' | 'sm' | 'md' | 'full';
/** Available chip radius variants */
declare const CHIP_ROUNDED: ChipRounded[];

/** Grid column count options */
type GridColumns = 1 | 2 | 3 | 4 | 6;
/** Grid gap size options */
type GridGap = 'none' | 'sm' | 'md' | 'lg';
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
declare class GridComponent {
    /** Default column count */
    private static readonly DEFAULT_COLUMNS;
    /**
     * Number of columns (default/mobile)
     * @default 2
     */
    columns: GridColumns;
    /**
     * Number of columns on sm breakpoint (640px+)
     * If not set, uses columns value
     */
    smColumns?: GridColumns;
    /**
     * Gap between grid items
     * @default 'md'
     */
    gap: GridGap;
    /**
     * Container element classes
     */
    get containerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridComponent, "orb-grid", never, { "columns": { "alias": "columns"; "required": false; }; "smColumns": { "alias": "smColumns"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; }, {}, never, ["*"], true, never>;
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';
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
declare class HeadingComponent {
    /**
     * セマンティックな見出しレベル (h1-h6)
     * - level=1 → h1 (画面タイトル、ページに1回のみ)
     * - level=2 → h2 (セクションタイトル)
     * - level=3 → h3 (ブロックタイトル)
     * - level=4-6 → h4-h6 (サブ見出し)
     */
    level: HeadingLevel;
    /**
     * 視覚的なサイズ。指定しない場合は level から自動推論。
     * - xl: typography.heading.xl (画面タイトル相当)
     * - lg: typography.heading.lg (セクションタイトル相当)
     * - md: typography.heading.md (ブロックタイトル相当)
     * - sm: typography.heading.sm (サブ・ブロックタイトル相当)
     */
    size?: HeadingSize;
    /**
     * アクセントバー（左側の縦棒）を表示するか。
     * セクションの開始を視覚的に強調する場合に使用。
     */
    accent: boolean;
    /**
     * 動的クラス生成 (Approach A: Getter Pattern)
     * テンプレート内の条件分岐を排除し、ロジックをTSに集約。
     */
    get headingClasses(): string[];
    /**
     * レベルからデフォルトのサイズを推論
     */
    private defaultSizeForLevel;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeadingComponent, "orb-heading", never, { "level": { "alias": "level"; "required": true; }; "size": { "alias": "size"; "required": false; }; "accent": { "alias": "accent"; "required": false; }; }, {}, never, ["*"], true, never>;
}

/**
 * Icon component variant types
 * @generated by scripts/tokens/generate-types-from-tokens.mjs
 * Do not edit manually - run `npm run tokens:build` to regenerate
 */
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** Available icon size variants */
declare const ICON_SIZES: IconSize[];
type IconColor = string;

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
declare class IconComponent {
    /**
     * Image URL for icon
     */
    src: string;
    /**
     * Size of the icon
     * @default 'md'
     */
    size: IconSize;
    /**
     * Alternative text for accessibility
     * @default '' (decorative icon)
     */
    alt: string;
    /**
     * Color of the icon
     * - PokemonType: Applies the type's color (e.g., 'fire', 'water')
     * - 'inverse': White color for dark backgrounds
     * - undefined: Inherits parent color via currentColor (default)
     */
    color?: IconColor;
    /**
     * Icon element classes
     */
    get iconClasses(): string[];
    /**
     * Computed color value for CSS mask mode
     * Returns CSS variable or null if no color is set
     */
    get iconColor(): string | null;
    /**
     * CSS mask-image URL for color mode
     */
    get maskImageUrl(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "orb-icon", never, { "src": { "alias": "src"; "required": true; }; "size": { "alias": "size"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
}

/**
 * Feedback state for radio buttons.
 * Used for quiz-like scenarios where selection results need visual feedback.
 */
type RadioButtonFeedbackState = 'default' | 'correct' | 'wrong' | 'actual';
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
declare class PtRadioButtonComponent<T = unknown> {
    /**
     * The value of this radio button.
     * Compared with the parent group's value to determine selection.
     */
    value: T;
    /**
     * Whether this radio button is disabled.
     */
    disabled: boolean;
    /**
     * Feedback state for visual indication of results (e.g., correct/wrong in quizzes).
     */
    feedbackState: RadioButtonFeedbackState;
    /**
     * Whether this radio button is currently selected.
     * Can be set directly or managed by orb-radio-group.
     */
    selected: boolean;
    /**
     * Emitted when this radio button is clicked/selected.
     */
    readonly radioSelect: EventEmitter<T>;
    private readonly group;
    get isSelected(): boolean;
    get isDisabled(): boolean;
    get isFeedbackCorrect(): boolean;
    get isFeedbackWrong(): boolean;
    get isFeedbackActual(): boolean;
    readonly role = "radio";
    get ariaChecked(): string;
    get ariaDisabled(): string | null;
    get tabIndex(): number;
    onClick(): void;
    onKeydown(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PtRadioButtonComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PtRadioButtonComponent<any>, "orb-radio-button", never, { "value": { "alias": "value"; "required": true; }; "disabled": { "alias": "disabled"; "required": false; }; "feedbackState": { "alias": "feedbackState"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, { "radioSelect": "radioSelect"; }, never, ["*"], true, never>;
}

type RadioGroupLayout = 'vertical' | 'horizontal';
type RadioGroupGap = 'sm' | 'md' | 'lg';
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
declare class PtRadioGroupComponent<T = unknown> implements AfterContentInit {
    /**
     * Name attribute for the radio group (for form association).
     */
    name: string;
    /**
     * Currently selected value.
     */
    value: T | null;
    /**
     * Layout direction of the radio buttons.
     */
    layout: RadioGroupLayout;
    /**
     * Gap between radio buttons.
     */
    gap: RadioGroupGap;
    /**
     * Whether the entire group is disabled.
     */
    disabled: boolean;
    /**
     * Emitted when the selected value changes.
     */
    readonly valueChange: EventEmitter<T>;
    get hostClasses(): string;
    readonly role = "radiogroup";
    get ariaDisabled(): string | null;
    ngAfterContentInit(): void;
    /**
     * Called by child orb-radio-button when selected.
     */
    selectValue(newValue: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PtRadioGroupComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PtRadioGroupComponent<any>, "orb-radio-group", never, { "name": { "alias": "name"; "required": false; }; "value": { "alias": "value"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], true, never>;
}

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
declare class SpinnerComponent {
    /**
     * Size of the spinner
     * @default 'md'
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Color variant of the spinner
     * @default 'primary'
     */
    variant: 'primary' | 'secondary';
    /**
     * Accessible label for screen readers
     * @default 'Loading...'
     */
    ariaLabel: string;
    /**
     * Container element classes
     */
    get containerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "orb-spinner", never, { "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, true, never>;
}

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
declare class StackComponent {
    /**
     * Stacking direction
     * - vertical: column
     * - horizontal: row
     * - responsive: column on mobile, row on sm+
     * @default 'vertical'
     */
    direction: 'vertical' | 'horizontal' | 'responsive';
    /**
     * Gap between items
     * @default 'md'
     */
    gap: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Align items on cross axis
     * @default 'stretch'
     */
    align: 'start' | 'center' | 'end' | 'stretch';
    /**
     * Justify content on main axis
     * @default 'start'
     */
    justify: 'start' | 'center' | 'end' | 'between';
    /**
     * Container element classes
     */
    get containerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<StackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StackComponent, "orb-stack", never, { "direction": { "alias": "direction"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "align": { "alias": "align"; "required": false; }; "justify": { "alias": "justify"; "required": false; }; }, {}, never, ["*"], true, never>;
}

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
declare class SurfaceComponent {
    /**
     * Visual variant
     * - default: white background
     * - subtle: light gray background
     * - card: white with shadow
     * - ghost: transparent
     * @default 'default'
     */
    variant: 'default' | 'subtle' | 'card' | 'ghost';
    /**
     * Inner padding
     * @default 'md'
     */
    padding: 'none' | 'sm' | 'md' | 'lg';
    /**
     * Border radius
     * @default 'md'
     */
    radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * Show border
     * @default false
     */
    border: boolean;
    /**
     * Container element classes
     */
    get containerClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SurfaceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SurfaceComponent, "orb-surface", never, { "variant": { "alias": "variant"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "radius": { "alias": "radius"; "required": false; }; "border": { "alias": "border"; "required": false; }; }, {}, never, ["*"], true, never>;
}

type TextVariant = 'body-lg' | 'body-md' | 'body-sm' | 'label-md' | 'label-sm' | 'label-xs';
type TextColor = 'primary' | 'secondary' | 'disabled' | 'inverse' | 'danger';
type TextWeight = 'normal' | 'medium' | 'bold' | 'black';
type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';
type TextAlign = 'start' | 'center' | 'end';
type TextElement = 'span' | 'p' | 'div' | 'label';
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
declare class TextComponent {
    /**
     * テキストのセマンティックなバリエーション
     * - body-lg: リードパラグラフ、強調説明文
     * - body-md: 標準本文 (default)
     * - body-sm: 注釈、メタ情報
     * - label-md: ボタン、ナビゲーション
     * - label-sm: タグ、バッジ
     * - label-xs: メタデータ、ステータス
     */
    variant: TextVariant;
    /**
     * テキストの色
     * - primary: メインテキスト (default)
     * - secondary: 補助テキスト
     * - disabled: 無効状態
     * - inverse: 反転（暗い背景上）
     * - danger: エラー・警告
     */
    color: TextColor;
    /**
     * フォントの太さ（オプション）
     * 指定しない場合は variant のデフォルトを使用。
     */
    weight?: TextWeight;
    /**
     * テキスト変換
     */
    transform: TextTransform;
    /**
     * 出力するHTML要素
     * - span: インライン (default)
     * - p: パラグラフ
     * - div: ブロック
     * - label: フォームラベル
     */
    element: TextElement;
    /**
     * イタリック体
     */
    italic: boolean;
    /**
     * テキスト揃え
     */
    align: TextAlign;
    /**
     * 動的クラス生成
     */
    get textClasses(): Record<string, boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "orb-text", never, { "variant": { "alias": "variant"; "required": false; }; "color": { "alias": "color"; "required": false; }; "weight": { "alias": "weight"; "required": false; }; "transform": { "alias": "transform"; "required": false; }; "element": { "alias": "element"; "required": false; }; "italic": { "alias": "italic"; "required": false; }; "align": { "alias": "align"; "required": false; }; }, {}, never, ["*"], true, never>;
}

export { AvatarComponent, ButtonComponent, CHIP_ROUNDED, CHIP_SIZES, CardComponent, CardContentComponent, CardFooterComponent, CardHeaderComponent, ChipComponent, GridComponent, HeadingComponent, ICON_SIZES, IconComponent, PtRadioButtonComponent, PtRadioGroupComponent, SpinnerComponent, StackComponent, SurfaceComponent, TextComponent };
export type { ChipRounded, ChipSize, IconColor, IconSize, RadioButtonFeedbackState, RadioGroupGap, RadioGroupLayout };
