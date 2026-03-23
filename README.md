# @m0g3k0/ui — Orbiter Design System

Angular コンポーネントライブラリとデザイントークン。

## インストール

```bash
npm install github:M0G3K0/orbiter#main
```

## 使い方

### 1. CSS変数をインポート（グローバルスタイルに追加）

```scss
// styles.scss または angular.json の styles に追加
@import 'node_modules/@m0g3k0/ui/dist/styles/tokens.css';
// または SCSS
@use 'node_modules/@m0g3k0/ui/dist/styles/tokens';
```

### 2. コンポーネントをインポート

```typescript
import { OrbChipComponent } from '@m0g3k0/ui';

@Component({
  imports: [OrbChipComponent],
  template: `<orb-chip size="md">ラベル</orb-chip>`
})
```

## 提供コンポーネント

| コンポーネント | セレクタ | 用途 |
|--------------|---------|------|
| AvatarComponent | `orb-avatar` | アバター画像 |
| ButtonComponent | `orb-button` | ボタン |
| CardComponent | `orb-card` | カード |
| ChipComponent | `orb-chip` | チップ（タグ） |
| GridComponent | `orb-grid` | グリッドレイアウト |
| HeadingComponent | `orb-heading` | 見出し |
| IconComponent | `orb-icon` | アイコン |
| RadioButtonComponent | `orb-radio-button` | ラジオボタン |
| SpinnerComponent | `orb-spinner` | ローディングスピナー |
| StackComponent | `orb-stack` | スタックレイアウト |
| SurfaceComponent | `orb-surface` | サーフェスコンテナ |
| TextComponent | `orb-text` | テキスト |

## デザイントークン

3層のトークン構造：

```
design-tokens/
├── tier1-primitive/   # 原始値（色、スペース等）
├── tier2-semantic/    # 意味付けされたトークン
└── tier3-component/   # コンポーネント固有トークン
```

CSS変数は `--orb-*` プレフィックス。

## 開発

```bash
npm run build:lib      # ライブラリビルド (dist/ui/)
npm run tokens:build   # トークンビルド (dist/styles/)
```

## ポケモン固有トークン（SDK）

`design-tokens/tier1-primitive/colors-pokemon.json` にポケモン18タイプのカラーが含まれています。
消費側でこれを利用してポケモン固有コンポーネントを作ることができます。
