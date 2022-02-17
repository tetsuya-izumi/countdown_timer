'use strict';

function countdown(due){
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000) % 60;
  const min = Math.floor(rest/1000/60) % 60;
  const hours = Math.floor(rest/1000/60/60) % 24;
  const count = [hours, min, sec];

  return count;

}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
console.log(countdown(goal));
const counter = countdown(goal);
const time = `${counter[0]}時間${counter[1]}分${counter[2]}`;
console.log(time);
document.getElementById('timer').textContent = time;

function recalc() {
    console.log(countdown(goal));
    const counter = countdown(goal);
    const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`
    console.log(time);
    document.getElementById('timer').textContent = time;
    // ※次の一行を忘れずに追加！！
    refresh();
  }
  
  // ここから
  function refresh() {
    setTimeout(recalc, 1000);
  }
  
  recalc();
  // ここまでを追加
// 参考URL https://qiita.com/tatsuhiko-nakayama/items/effe8a1c1227514e3fcb