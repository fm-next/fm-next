# Create T3 App


## Node
バージョン管理ツールはVoltaを使用。
package.jsonにバージョン記載あり。

## Setup
Voltaのインストール
https://docs.volta.sh/guide/getting-started

.env設置後以下コマンドを実行

```bash
$ npm install
$ npm run dev
```


## NEXT_AUTH_SECRETを生成
```ruby:qiita.rb
openssl rand -base64 32
```
