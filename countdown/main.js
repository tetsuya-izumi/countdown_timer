'use strict';

function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const dec_sec = Math.floor(rest/100) % 60;
  const sec = Math.floor(rest/1000) % 60;
  const min = Math.floor(rest/1000/60) % 60;
  const hours = Math.floor(rest/1000/60/60) % 24;
  const count = [hours, min, sec, dec_sec];

  return count;

}

// 関数=機能 引数=材料 戻り値=できたもの
// 例えば大根おろし機の婆愛 機能=すリおろし 引数=大根 戻り値=大根おろし

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
console.log(countdown(goal));
const counter = countdown(goal);
const time = `${counter[0]}時間${counter[1]}分${counter[2]}${counter[3]}`;
console.log(time);
document.getElementById('timer').textContent = time;

function recalc() {
    console.log(countdown(goal));
    const counter = countdown(goal);
    const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒${counter[3]}`
    console.log(time);
    document.getElementById('timer').textContent = time;
    // ※次の一行を忘れずに追加！！
    refresh();
  }
  
  // ここから
  function refresh() {
    setTimeout(recalc, 100);
  }
  
  recalc();
  // ここまでを追加
// 参考URL https://qiita.com/tatsuhiko-nakayama/items/effe8a1c1227514e3fcb