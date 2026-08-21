# 商品画像フォルダ / 상품 이미지 폴더

OLIVE YOUNG GLOBAL の公式商品画像をここに置きます。
（올리브영 글로벌 공식 상품 이미지를 여기에 넣습니다.）

## 使い方 / 사용법

1. このフォルダに画像ファイルを置く（例: `torriden-dive-in-serum.jpg`）
2. `index.html` の `PRODUCTS` 配列で、その商品に `img:"ファイル名"` を追加する
   例: `{brand:"Torriden", ..., img:"torriden-dive-in-serum.jpg"}`
3. 画像があるカードは自動で写真表示＋「© Olive Young GLOBAL」出典が付きます。
   `img` が無い商品は従来どおりグラデーション＋絵文字で表示されます。

## 画像の推奨仕様 / 권장 사양

- 形: 正方形に近いもの（カード枠 object-fit: cover で自動トリミング）
- サイズ: 幅 600〜800px 程度
- 形式: `.jpg` / `.webp`（軽いほど良い、目安 150KB 以下）
- ファイル名: 半角英数・ハイフンのみ（例 `anua-heartleaf-toner.jpg`）

## 出典表記 / 출처 표기

OLIVE YOUNG GLOBAL より公式画像の使用許可を取得済み（2026年）。
使用条件: 出典を「Olive Young GLOBAL」と明記すること。
→ サイト側でカードに自動で「© Olive Young GLOBAL」を表示します。
