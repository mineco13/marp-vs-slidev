# Marp vs Slidev

Markdown ベースのプレゼンテーションツール比較。

| 観点         | [Marp][marp]                                              | [Slidev][slidev]                                                                |
| ------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 開発体験     | シンプル、軽量、最小限のセットアップ                      | 高機能; Node.js/Vue の知識が必要                                                |
| VSCode 連携  | [Marp for VS Code][marp-vscode]: プレビュー、エクスポート | [Slidev for VS Code][slidev-vscode]: プレビュー、スライド操作、コードスニペット |
| 出力形式     | [HTML, PDF, PPTX][marp-export]（単一ファイル）            | [PDF, PNG, SPA][slidev-export]                                                  |
| ユースケース | ドキュメント、配布資料、PDF 主体のスライド                | 開発者向けトーク、インタラクティブデモ、ライブコーディング                      |

## For Developer

```sh
npm i && npm run dev
```

| route            | _Next.js does_ | artifact                                                      | _NPM does_ | source code |
| ---------------- | -------------- | ------------------------------------------------------------- | ---------- | ----------- |
| slides/          | ls .out/       | -                                                             | -          | -           |
| slides/marp...   | -host->        | .out/[base64url]\("marp https://source_url(.md file)"\)       | <-build-   | ./marp      |
| slides/slidev... | -host->        | .out/[base64url] \("slidev https://source_url(Slidev code)"\) | <-build-   | ./slidev    |

[marp]: https://marp.app/
[slidev]: https://sli.dev/
[marp-vscode]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
[slidev-vscode]: https://marketplace.visualstudio.com/items?itemName=antfu.slidev
[marp-export]: https://github.com/marp-team/marp-cli?tab=readme-ov-file#basic-usage
[slidev-export]: https://sli.dev/guide/exporting#formats
[base64url]: https://it-infomation.com/base64-url-encode/
