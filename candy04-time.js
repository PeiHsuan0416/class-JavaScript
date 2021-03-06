// 糖果練習題
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  let hr = (Math.floor(seconds / 3600)).toString();  //Math.floor 回傳小於於所給數字最大整數，這裡計算會無條件捨去
  let min = (Math.floor((seconds - (hr * 3600)) / 60)).toString();  //將(帶入的秒數-除於小時的秒數)除60(一分鐘60秒)取整數得到幾分
  let sec = (Math.floor(seconds - (hr * 3600) - (min * 60))).toString(); //利用.toString()將數字轉換成字串
  return hr.padStart(2,0) + ":" + min.padStart(2,0) + ":" + sec.padStart(2,0) //利用.padStart(字串長度,想補的字串)將0補再前面
  }

// function humanReadableTimer(seconds) {
//   let sec = Math.trunc(seconds / 3600) % 60;
//   let min = (seconds - sec) % 3600;
//   let hr = Math.trunc(seconds - min) / 3600;
//   if (hr < 10) {
//     hr = "0" + hr;
//   }
//   if (min < 10) {
//     min = "0" + min;
//   }
//   if (sec <= 0) {
//     sec = "0" + sec;
//   }
//   return hr + ":" + min + ":" + sec;
// }

// console.log(humanReadableTimer(0))      // 印出 00:00:00
// console.log(humanReadableTimer(59))     // 印出 00:00:59
// console.log(humanReadableTimer(60))     // 印出 00:01:00
// console.log(humanReadableTimer(90))     // 印出 00:01:30
// console.log(humanReadableTimer(3599))   // 印出 00:59:59
// console.log(humanReadableTimer(3600))   // 印出 01:00:00
// console.log(humanReadableTimer(45296))  // 印出 12:34:56
// console.log(humanReadableTimer(86399))  // 印出 23:59:59
// console.log(humanReadableTimer(86400))  // 印出 24:00:00
// console.log(humanReadableTimer(359999)) // 印出 99:59:59
