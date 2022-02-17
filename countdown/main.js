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

// 参考URL https://qiita.com/tatsuhiko-nakayama/items/effe8a1c1227514e3fcb