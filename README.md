# thumbnail-text-maker

テキストを入力し、フォント・サイズ・カラー・エフェクトを調整しながらプレビュー、透過PNGとしてダウンロードできるWebアプリ。サムネイル用の文字素材作成に特化。

GitHub Pages で公開: `https://<username>.github.io/thumbnail-text-maker/`

## 技術スタック

- Vite + React + TypeScript
- HTML Canvas（レンダリング・PNG書き出し）
- Google Fonts API（日本語・英語フォント）

## 主な機能

- 複数テキストボックス（各ボックスで個別スタイル設定）
- ドラッグ＆ドロップ配置 ＋ スナップガイド
- フォント選択（Google Fonts 厳選13種 ＋ ローカルフォントアップロード）
- 縁取り最大3重（各レイヤーで色・太さ個別設定）
- ドロップシャドウ
- グラデーション文字色
- 出力：テキスト領域に合わせた透過PNG（余白調整可）
- レスポンシブ（PC: 左パネル＋右Canvas / Mobile: 上下）

## セットアップ

```bash
npm install
npm run dev
```

## ビルド & デプロイ

```bash
npm run build
# dist/ を GitHub Pages にデプロイ
```
