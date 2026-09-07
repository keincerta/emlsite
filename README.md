# 稼ぐための必須LINK

依存関係なしで動作する静的サイトです。GitHub リポジトリを Netlify に接続するだけで公開できます。

## ローカル確認

PowerShell で以下を実行します。

```powershell
py -m http.server 51234
```

ブラウザで `http://localhost:51234` を開いてください。

## 公開

1. このフォルダを GitHub リポジトリへ push
2. Netlify で「Add new site」→「Import an existing project」
3. GitHub リポジトリを選択
4. Publish directory は `.` のまま Deploy

`netlify.toml` は基本的なセキュリティヘッダーを含みます。
