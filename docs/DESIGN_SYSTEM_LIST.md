# Orbiter Design System - Component Catalog

> **"Orbit the core, deliver more."**
>
> AIが部品を選ぶためのカタログです。
> 各コンポーネントは「ユーザーにとっての役割（Job）」で分類されています。

---

## コンポーネント分類

### [L] Layouts — 画面骨格
画面全体の構造を決めるコンポーネント。

| コンポーネント | セレクタ | 説明 | 状態 |
|--------------|---------|------|------|
| MasterDetail | `orb-master-detail` | 左右分割レイアウト（リスト + 詳細） | 🔲 未実装 |
| Stacked | `orb-stacked` | 縦積みレイアウト | 🔲 未実装 |
| Sidebar | `orb-sidebar` | サイドバー付きレイアウト | 🔲 未実装 |

### [D] Data Views — データ表示
データをユーザーに見せるためのコンポーネント。

| コンポーネント | セレクタ | 説明 | 状態 |
|--------------|---------|------|------|
| DataList | `orb-data-list` | データリスト表示 | 🔲 未実装 |
| DataCard | `orb-data-card` | カード形式のデータ表示 | 🔲 未実装 |
| DataTable | `orb-data-table` | テーブル形式のデータ表示 | 🔲 未実装 |
| Chart | `orb-chart` | チャート/グラフ表示 | 🔲 未実装 |

### [O] Overlays — 重ねるUI
画面の上に重ねて表示するコンポーネント。

| コンポーネント | セレクタ | 説明 | 状態 |
|--------------|---------|------|------|
| Dialog | `orb-dialog` | モーダルダイアログ | 🔲 未実装 |
| Drawer | `orb-drawer` | サイドパネル（ドロワー） | 🔲 未実装 |
| Toast | `orb-toast` | 通知トースト | 🔲 未実装 |
| Tooltip | `orb-tooltip` | ツールチップ | 🔲 未実装 |

### [I] Interactions — 操作・フィードバック
ユーザーの操作を受け付けるコンポーネント。

| コンポーネント | セレクタ | 説明 | 状態 |
|--------------|---------|------|------|
| PageHeader | `orb-page-header` | ページヘッダー | 🔲 未実装 |
| SectionHeader | `orb-section-header` | セクションヘッダー | 🔲 未実装 |
| Input | `orb-input` | テキスト入力 | 🔲 未実装 |
| Select | `orb-select` | セレクトボックス | 🔲 未実装 |
| Tabs | `orb-tabs` | タブ切り替え | 🔲 未実装 |
| Navigation | `orb-navigation` | ナビゲーション | 🔲 未実装 |

### [U] UI (Atoms) — 基本部品
最小単位のUI部品。spartan/uiベース。

| コンポーネント | セレクタ | 説明 | 状態 |
|--------------|---------|------|------|
| Button | `orb-button` | ボタン | 🔲 未実装 |
| Badge | `orb-badge` | バッジ | 🔲 未実装 |
| Chip | `orb-chip` | チップ/タグ | 🔲 未実装 |
| Icon | `orb-icon` | アイコン | 🔲 未実装 |
| Spinner | `orb-spinner` | ローディングスピナー | 🔲 未実装 |

---

## 使い方（AIへの指示例）

```
「この画面にはMasterDetailレイアウトを使い、
  左側にDataListでユーザー一覧を表示、
  右側のDetailエリアにDataCardでプロフィールを表示してください。
  ヘッダーにはPageHeaderを使用してください。」
```
