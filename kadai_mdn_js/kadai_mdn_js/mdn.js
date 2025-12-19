// 現在の日付を取得
const today = new Date();

// 年・月・日をそれぞれ取得
const year = today.getFullYear();      // 年
const month = today.getMonth() + 1;    // 月（※0始まりなので +1）
const day = today.getDate();           // 日

// 文字列として出力
console.log(year + "年" + month + "月" + day + "日" );