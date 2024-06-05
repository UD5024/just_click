var enemy_LV = 1;
var enemy_HP = 2;
var time = 90.00;
var score = 0;
var size = 1;
var isGame = false;

function runGame() {
    DrawHP();
    DrawDetail();
    time -= 0.01;
    if (time > 0) {
        setTimeout(function() {runGame()}, 10);
    }
    else {
        GameOver();
    }
}

function DrawHP() {
    document.getElementById("hp").style.backgroundColor = 'red';
    document.getElementById("hp").innerHTML = '<div style="background-color:green; height:100%; width:'+100*enemy_HP/(2**enemy_LV)+'%;"></div>';
}
function DrawButton() {
    document.getElementById("ButtonBox").innerHTML = '<button onclick="cliclBotton()" id="size'+size+'"><p>打我</p></button>';
}
function DrawDetail() {
    document.getElementById("detail").innerHTML = '<p>目前等級：'+enemy_LV+' 分數 X'+size+'</p><p>剩餘時間：'+Math.floor(time/60)+':'+Math.floor(time%60)+'</p><p>分數：'+score+'</p>';
}
function cliclBotton() {
    if ((isGame == true)&&(time > 0)) {
        score += size;
        enemy_HP -= 1;
        if (enemy_HP <= 0) {
            enemy_LV += 1;
            enemy_HP = 2**enemy_LV;
            if ((enemy_LV == 5)||(enemy_LV == 7)||(enemy_LV == 8)||(enemy_LV == 9)) {
                size +=1;
                DrawButton();
            }
        }
    }
    else {
        isGame = true;
        runGame();
    }
}

function GameOver() {
    if (confirm('獲得分數：'+score+'\n按下確定可再試一次') == true) {
        location.reload();
    }
    else {
        alert('手痠了吧，下次一定');
    }
}