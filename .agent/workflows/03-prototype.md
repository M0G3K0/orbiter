---
description: 4タブ構成（Prototype/Map/Spec/QA）のプロトタイプ環境で検証する。
---

# 🧪 Phase 03: Prototype（プロトタイプ検証）

1つのURLに **Prototype / Map / Spec / QA** が同居する環境で検証する。

> ⚠️ **大原則: プロトタイプ = 実装コード**
>
> プロトは別アプリではない。**実装コードそのもの**に開発用ツール（Map/Spec/QA）を乗せたもの。
> バリアント切替は `?variant=A` 等のクエリパラメータで行い、確定後は不要な分岐を削除するだけ。
> Map/Spec/QA タブは `environment` フラグで本番ビルドから除外する。

> 💡 参考: [Claude Code中心のデザイン環境](https://note.com/smikami/n/naae1f0f56206)
> デモ: [Viet Learn](https://viet-learn-demo.proto.duong-sm.com/)

---

## 🏗️ 4タブ構成

```
[Prototype]  [Map]  [Spec]  [QA]
```

### 🖥️ Prototype タブ
- 実際に触れるUI本体
- シンプルにプロトを試せる
- フロー（操作の流れ）はここで実際に体験する

### 🗺️ Map タブ
- **ngx-vflow** による画面遷移の俯瞰図
- 各画面ノードにバリアント/状態のタグが付く
- ノードクリック → **サイドパネル**が右から出現
  - PATTERNS / STATES / VARIANTS を一覧
  - カラム数切替（1〜6列）で並列比較
  - バリアント選択 → Map上のプレビューが連動で差し替わる
  - バリアント選択 → Prototypeタブにそのバリアントで遷移も可能

### 📐 Spec タブ
- 02-spec-explore で作成したDesign Docをブラウザ上で閲覧
- エンジニアが実装時に参照する仕様書

### ✅ QA タブ
- エッジケース・テストケースの一覧
- 各画面の状態（Empty/Loading/Error等）のチェックリスト

---

## 🔧 技術スタック

| 要素 | 技術 | 備考 |
|------|------|------|
| フロー図 | **ngx-vflow** | Angular版。React Flowの代替 |
| フレームワーク | Angular (Orbiter DS) | |
| UI部品 | spartan/ui + Orbiter DS | |

---

## 📦 テンプレート（TODO）

プロトタイプ環境を毎回ゼロから作らなくて済むよう、
テンプレートを用意する（今後のタスク）。

```
templates/prototype-app/
├── src/
│   ├── app/
│   │   ├── tabs/
│   │   │   ├── prototype/     ← 触れるUI
│   │   │   ├── map/           ← ngx-vflow 画面遷移図
│   │   │   ├── spec/          ← Design Doc表示
│   │   │   └── qa/            ← テストケース一覧
│   │   └── shared/
│   │       └── side-panel/    ← バリアント切り替えサイドパネル
│   └── ...
└── README.md
```

---

## ✅ 検証 → 確定

🚪 **人間のゲート**: ユーザーがMapでバリアントを比較し、Prototypeで触って検証。

| 判断 | アクション |
|------|-----------|
| 「このパターンがいい」 | → 確定して [04-build.md](./04-build.md) へ |
| 「ミックスしたい」 | → 新バリアント追加 → 再検証 |
| 「全部微妙」 | → [02-spec-explore.md](./02-spec-explore.md) に戻って再探索 |

---

## 🕳️ DS Gap からの昇格

02 Spec Explore で DS Gap として記録したものをプロトで検証した結果：

| 判断 | アクション |
|------|-----------|
| 使い勝手が良い | → DS に昇格（コンポーネント化 + ドキュメント追加） |
| 微妙 | → このプロジェクトのローカル実装に留める |
