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
- グラデーション文字色
- 不透明度: 非対応

### フォント一覧（Google Fonts）
| カテゴリ | フォント |
|---------|---------|
| 太字インパクト | Dela Gothic One、Black Han Sans |
| 定番ゴシック | Noto Sans JP、M PLUS 1p |
| 丸ゴシック | Zen Maru Gothic、Rounded Mplus 1c |
| 明朝 | Noto Serif JP、Shippori Mincho |
| 手書き風 | Klee One、Yomogi |
| 英語 | Bebas Neue、Oswald、Anton |

### UI レイアウト
- PC: 左パネル（設定）＋ 右（Canvas プレビュー）
- Mobile: 上（Canvas）＋ 下（設定パネル）

## ディレクトリ構成（予定）

```
src/
  components/
    Canvas/        # Canvasレンダリング・ドラッグ操作
    TextPanel/     # テキスト設定パネル（フォント・エフェクト等）
    StrokeLayer/   # 縁取りレイヤー設定（最大3つ）
    FontPicker/    # フォント選択・アップロード
  hooks/
    useCanvas.ts   # Canvas描画ロジック
    useDrag.ts     # ドラッグ＆ドロップ＋スナップ
  types/
    index.ts       # TextBox, StrokeLayer, Shadow 等の型定義
  utils/
    canvasRenderer.ts  # Canvas描画・PNG書き出し
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
