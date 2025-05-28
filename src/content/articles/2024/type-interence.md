---
title: 意外と知らない? 動的型付けと型推論の違い
pubDate: 2024-4-26
updatedDate: 2024-4-26
---

## はじめに

この記事はあくまで初心者向けです。

かみ砕いて説明しているため中級者や上級者の方からすると多少イライラする部分があると思いますが、お手柔らかにしていただけると幸いです。

## 動的型付けと型推論の違いは何？

違いとしては**変数の宣言後の代入時に型が変わるか否かです。**

まず以下のJavaScriptのコードを見てください

```js
let a = 123;

a = "hello";

console.log(a);
```

JavaScriptは動的型付けなので、**代入時に型が変わります。**

なので最初に数字を代入しても、後から文字列を代入できるんです。

### これが動的型付けです。

いっぽうTypeScriptでは**動的型付けではなく型推論**なので、JavaScriptのようなことはできません。

実際に実行すると以下のようなエラーが出てしまいます。

```
E:\codes\article> tsc index.ts
index.ts:3:1 - error TS2322: Type 'string' is not assignable to type 'number'.

3 a = "2344324"
  ~


Found 1 error in index.ts:3
```

要するに最初にaに数字を代入しているのでaはnumber型になっています。

なので後から文字列を入力しようとするとエラーが出てしまうのです。

**これが型推論です。**

## 最後に

自分は他にもいろいろな記事を書いているので見ていただければ幸いです。

変更点等ありましたら、下記の[Twitter](https://twitter.com/robot_neet)アカウントに問い合わせしていただければ幸いです。

## 引用元

https://typescriptbook.jp/reference/values-types-variables/difference-between-type-inference-and-dynamic-typing

https://qiita.com/ryutaro-kimura/items/c82fa92eaf3a96a8c977
