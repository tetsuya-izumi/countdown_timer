btn_start.addEventListener('click', function () {
    var countdown_time = document.getElementById('time')
    
    // 入力された値を十進数の数値として扱う
    var calc_origin1 = parseInt(countdown_time.value, 10)
    
    console.log(calc_origin1);

});


