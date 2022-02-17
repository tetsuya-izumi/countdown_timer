'use strict';
function countdown(due) {
    // 定数nowに現在時刻を代入
    const now = new Date();
    // 定数restに未来時刻-現在時刻の計算結果を代入
    const rest = due.getTime() - now.getTime();
    // 定数secに残り時間rest（ミリ秒）を秒単位にして代入
    const sec = Math.floor(rest/1000);
    return sec;
}

let goal = new Date();

console.log(goal);

goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countdown(goal));

// 参考URL https://qiita.com/tatsuhiko-nakayama/items/effe8a1c1227514e3fcb