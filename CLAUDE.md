# thumbnail-text-maker — CLAUDE.md

## プロジェクト概要

サムネイル用の文字素材を作る Web アプリ。テキスト・スタイルを設定しプレビューしながら調整、最終的に透過 PNG としてダウンロードできる。GitHub Pages で静的ホスティング。

参考サイト: https://tameshigaki.jp/

## 技術スタック

| 項目 | 選択 |
|------|------|
| フレームワーク | Vite + React + TypeScript |
| レンダリング | HTML Canvas（プレビュー・書き出し共通） |
| フォント | Google Fonts API + ローカルフォントアップロード（FontFace API） |
| ホスティング | GitHub Pages（`base: '/thumbnail-text-maker/'`） |

## 確定済み仕様

### 出力
- 形式: 透過 PNG
- サイズ: テキスト領域に合わせて自動（余白調整スライダーあり）

### テキストボックス
- 複数テキストボックス対応
- ドラッグ＆ドロップで自由配置
- スナップガイド（中央・端・他ボックスの端に吸着）
- 縦書き: 非対応

### スタイル設定（テキストボックスごと）
- フォント・フォントサイズ・フォントカラー
- 太字・斜体・文字間隔・行間
- 縁取り: 最大3重（各レイヤーで色・太さ個別設定）
- ドロップシャドウ
- グラデーション文字色: 2〜3色（中間色の追加/削除）・方向は縦/横/斜め・プリセットスウォッチ 14 種（`src/data/gradientPresets.ts`）
- 不透明度: 非対応

### デザインプリセット（テロップデザイン）
- 14 カテゴリ 249 種（`src/data/presets/*.ts`、`preset()` ヘルパーで定義）
- **プリセット id はカテゴリ内の配列 index から生成される。既存要素の途中挿入・削除・並べ替えは禁止（末尾追加のみ可）**。localStorage の「最近使ったデザイン」が id を参照するため

### フォント一覧（Google Fonts）
| カテゴリ | フォント |
|---------|---------|
| 太字インパクト | Dela Gothic One、Black Han Sans、Potta One |
| 定番ゴシック | Noto Sans JP、M PLUS 1p、Zen Kaku Gothic New、BIZ UDPGothic |
| 丸ゴシック・ポップ | Zen Maru Gothic、Rounded Mplus 1c、Kiwi Maru、Mochiy Pop One |
| 明朝・和風 | Noto Serif JP、Shippori Mincho、Zen Old Mincho、Shippori Antique B1、Kaisei Decol |
| 筆・手書き風 | Klee One、Yomogi、Yusei Magic、Yuji Syuku、Zen Kurenaido |
| ゲーム・バラエティ | Rampart One、Reggae One、Hachi Maru Pop、Cherry Bomb One、Monomaniac One |
| 音楽・ネオン | RocknRoll One、Train One、Monoton、Orbitron |
| ドット/レトロ | DotGothic16、New Tegomin、Stick |
| 英語 | Bebas Neue、Oswald、Anton、Russo One、Press Start 2P、Pacifico、Permanent Marker |

一覧の実体は `src/utils/canvasRenderer.ts` の `FONT_CATEGORIES`。追加時は `index.html` の Google Fonts `<link>` にも family を追記する。

### UI レイアウト
- PC: 左パネル（設定）＋ 右（Canvas プレビュー）
- Mobile: 上（Canvas）＋ 下（設定パネル）

## ディレクトリ構成

```
src/
  components/
    Canvas/        # Canvasレンダリング・ドラッグ操作
    TextPanel/     # テキスト設定パネル（モーダル開閉 state・デザイン適用を集約）
    StrokeLayer/   # 縁取りレイヤー設定（最大3つ）
    FontPicker/    # フォント選択トリガー・ローカルフォントアップロード
    StyleModal/    # デザイン/フォント統合モーダル（タブ切替。選択で適用して閉じる）
    TelopGallery/  # プリセットカード（canvas サムネ描画）・描画キュー
  hooks/
    useCanvas.ts   # Canvas描画ロジック
    useDrag.ts     # ドラッグ＆ドロップ＋スナップ
  data/
    presets/           # デザインプリセット（カテゴリ別。末尾追加のみ可）
    telopPresets.ts    # カテゴリ統合・id 検索・TextBox 変換
    gradientPresets.ts # グラデーションスウォッチ定義
  types/
    index.ts       # TextBox, StrokeLayer, Shadow, Gradient 等の型定義
  utils/
    canvasRenderer.ts  # Canvas描画・PNG書き出し・FONT_CATEGORIES
    snapGuide.ts       # スナップガイド計算
```

## GitHub Pages デプロイ設定

`vite.config.ts` に以下を設定:
```ts
base: '/thumbnail-text-maker/'
```

GitHub Actions で `dist/` を `gh-pages` ブランチに自動デプロイ。

## 開発上の注意

- Canvas の描画は `canvasRenderer.ts` に集約し、React コンポーネントからは直接 Canvas API を呼ばない
- 3重縁取りは Canvas の `strokeText` を外側から順に描画（順序が重要）
- Google Fonts は `<link>` タグで読み込み後、`FontFace` で Canvas に適用する
- ローカルフォントは `FileReader` → `FontFace API` でブラウザメモリに登録（サーバー不要）
- スナップ判定は 8px 以内で吸着
