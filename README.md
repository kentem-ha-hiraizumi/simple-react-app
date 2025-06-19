# simple-react-app

## 概要

React + TypeScript + Vite を用いたシンプルなフロントエンドアプリケーションです。

## 技術スタック

- [React](https://react.dev/) 19.x
- [TypeScript](https://www.typescriptlang.org/) 5.x
- [Vite](https://vitejs.dev/) 6.x
- [Biome](https://biomejs.dev/) 2.x（コードリント・フォーマット）

## ディレクトリ構成（一部抜粋）

```
src/                アプリケーション本体
  features/         機能別ディレクトリ
  pages/            画面構成
public/             公開用静的ファイル
```

## 主な npm scripts

| コマンド         | 説明                                 |
| ---------------- | ------------------------------------ |
| npm run dev      | 開発サーバーを起動（ホットリロード） |
| npm run build    | 本番ビルド（型チェック含む）         |
| npm run preview  | ビルド後のプレビューサーバー起動     |
| npm run lint     | Biome によるコードチェック           |
| npm run lint:fix | Biome による自動修正                 |

## セットアップ・起動方法

1. 依存パッケージのインストール
   ```bash
   npm install
   ```
2. 開発サーバーの起動
   ```bash
   npm run dev
   ```
