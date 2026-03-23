---
name: component-builder
description: Orbiterデザインシステムのコンポーネントを構築するスキル
---

# Component Builder スキル

> Orbiterデザインシステムのコンポーネントを設計・実装するAIスキル

## 役割

Unified Spec（実装仕様書）に基づいて、Orbiterデザインシステムのコンポーネントを
Angular Standalone Component + spartan/ui + Tailwind CSS で実装する。

## 原則

### 1. SSoT (Single Source of Truth)
- デザイントークンJSONが唯一の真実
- コンポーネントのスタイルはトークン参照で定義
- 型定義はトークンJSONから自動生成

### 2. 役割ベース分類
コンポーネントは以下の5カテゴリに分類される:
- `[L] layouts/` — 画面骨格
- `[D] data-views/` — データ表示
- `[O] overlays/` — 重ねるUI
- `[I] interactions/` — 操作・フィードバック
- `[U] ui/` — 基本部品 (Atoms)

### 3. spartan/ui パターン
- **Brain** (`@spartan-ng/brain`): アクセシビリティ・キーボード操作を担当
- **Helm** (コピーしたスタイルコード): Tailwind CSSでのスタイリング
- カスタムコンポーネントは Brain を拡張して作成

## コンポーネント構造

```
[category]/[component-name]/
├── orb-[name].component.ts     # コンポーネント本体
├── orb-[name].component.html   # テンプレート（インラインも可）
├── orb-[name].component.scss   # スタイル
├── orb-[name].types.ts         # 型定義（トークンから自動生成）
├── orb-[name].component.spec.ts # テスト
└── index.ts                    # Public API
```

## 命名規則

- セレクタ: `orb-[name]` (例: `orb-button`)
- クラス名: `Orb[Name]Component` (例: `OrbButtonComponent`)
- ファイル名: `orb-[name].component.ts`

## 実装手順

1. Tier 3 トークンJSON が存在するか確認 (`design-tokens/tier3-component/`)
2. 型定義を確認/生成
3. spartan/ui の Brain プリミティブを確認
4. コンポーネントを実装
5. テストを作成
6. NgDoc ドキュメントを作成/更新
7. `DESIGN_SYSTEM_LIST.md` を更新
