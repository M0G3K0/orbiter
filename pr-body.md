## 💡 概要
`npm install github:M0G3K0/orbiter#main` でインストールしたとき `@m0g3k0/ui` として使えるように、root `package.json` のエントリポイントを設定する。

## 📝 変更内容
- `package.json`
  - `name`: `orbiter` → `@m0g3k0/ui`
  - `private: true` を削除
  - `main`, `module`, `typings`, `exports`, `sideEffects` を追加（`dist/ui` を向く）

## 🔗 関連Issue
なし

## 📷 スクリーンショット（該当する場合）
UI変更なし

## ✅ チェックリスト
- [x] コミットメッセージが規約に従っている（`chore:`）
- [x] ブランチ名が規約に従っている（`chore/`）
- [x] 必要に応じてドキュメントを更新した

## 📌 補足事項
この変更後、消費側では:
```bash
npm install github:M0G3K0/orbiter#main
import { OrbChipComponent } from '@m0g3k0/ui';
```
が正しく動く。

---

## 📝 PRタイトルの命名規則:
- `type: description` の形式にすること（Conventional Commits）
- **英語で書くこと**（commitlint で検証されます）

タイプ一覧（絵文字は任意）:
- ✨ feat: 新機能
- 🩹 fix: バグ修正
- 🐛 bug: バグ報告（Issue用）
- 📚 docs: ドキュメント
- 🎨 style: スタイル変更
- ♻️ refactor: リファクタリング
- ⚡ perf: パフォーマンス改善
- 🧪 test: テスト
- 🏗️ build: ビルド
- 👷 ci: CI/CD
- 🔧 chore: その他
- ❓ question: 質問・議論（Issue用）
- ⏪ revert: 変更を元に戻す
- 💥 breaking: 破壊的変更
- 🚧 wip: 作業中

例: `feat: add sound effects and toggle switch`

## 📖 レビュー用語集

| 用語 | 意味 | 説明 |
|------|------|------|
| **LGTM** | Looks Good To Me | 良いと思います |
| **WIP** | Work In Progress | 対応中 |
| **FYI** | For Your Information | 参考までに |
| **must** | must | 必須 |
| **want** | want | できれば |
| **imo** | in my opinion | 私の意見では |
| **nits** | nitpick | 些細な指摘（重箱の隅をつつくの意味） |
