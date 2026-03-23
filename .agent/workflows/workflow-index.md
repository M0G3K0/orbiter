---
description: Orbiter AI開発ワークフローのハブ。ここから各フェーズへ遷移する。
---

# 🚀 Orbiter Workflow

> "Orbit the core, deliver more."

---

## Core Flow

```
01 Requirements   02 Spec Explore    03 Prototype       04 Build
┌──────────┐    ┌──────────────┐   ┌──────────────┐   ┌──────────┐
│ 何作りたい？│ → │ 複数案WF+仕様 │ → │ 触って比べる  │ → │ 仕上げ    │
│ (会話)    │    │ → 絞り込み   │   │ (4タブ環境)  │   │ (削る)   │
└──────────┘    └──────────────┘   └──────────────┘   └──────────┘
```

| # | Phase | ファイル | やること |
|---|-------|---------|---------|
| 01 | 📝 [Requirements](./01-requirements.md) | 要件整理 | 会話で引き出し→構造化 |
| 02 | 🧩 [Spec Explore](./02-spec-explore.md) | 仕様探索 | 複数案のWF+仕様を作成→フィルタ |
| 03 | 🧪 [Prototype](./03-prototype.md) | プロト検証 | 4タブ(Prototype/Map/Spec/QA)で比較 |
| 04 | 🔨 [Build](./04-build.md) | 本実装 | 削る→整える→繋ぐ |
