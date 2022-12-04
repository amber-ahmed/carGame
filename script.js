var direction;
var update = '';
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            {
                //left     
                document.getElementsByClassName('car')[0].style.left = '15%';
                document.getElementsByClassName('car')[0].style.animation = "movleft 0.4s  1";
                carpos = 1;
                break;
            }
        case 39:
            {
                //right     
                document.getElementsByClassName('car')[0].style.left = '30%';
                document.getElementsByClassName('car')[0].style.animation = "movright 0.4s  1";
                carpos = 2;
                break;
            }

        case 38:
            {
                start = new Date().getTime();
                gameSttime = new Date().getTime();
                gameTimeInterval = setInterval(function () {
                    gameRunningTime = (new Date().getTime() - gameSttime) / 1000;
                    document.getElementById("timer").innerHTML = gameRunningTime;
                    if (gameRunningTime > 50)
                        incomngCarTime = 3;
                    else if (gameRunningTime > 110)
                        incomngCarTime = 2;
                }, 0);

                startnendgame = setInterval(
                    timer
                    , (currentsecondsPassed * 1000) + 10);
                if (!update) {
                    update = setInterval(function () {
                        increase(i)
                    }, speed);
                    direction = 'down';
                }
                break;
            }

        case 40:
            {

            }
    }

    // if (event.keyCode == 38) {

    // }

    //  else if (event.keyCode == 40) {
    //     direction = 'up';
    // }


}


var opnspd = 50;
var start = 0;
var gameSttime = 0;
var i = 500;
var flag = true;
var flag2 = true;
var ani = 4;
var speed = 250;
var carpos = 1;
var currentsecondsPassed = 5;
var gameRunningTime;
var gameTimeInterval;
var startnendgame;
var incomngCarTime = 4;
function increase() {
    if (i > 599)
        clearInterval(update);
    flag = true;
    flag2 = false;
    document.getElementById("show").innerHTML = i;
    document.getElementById("highway").style.animation = "highway " + ani + "s linear infinite";

    if (i > 50) {
        clearInterval(update);
        ani = 3.7;
        speed = 220;
        opnspd = 40;
        update = setInterval(function () {
            increase()
        }, speed);
    }

    if (i > 80) {
        clearInterval(update);
        ani = 3.3;
        speed = 200;
        opnspd = 35;
        update = setInterval(function () {
            increase()
        }, speed);
    }

    if (i > 150) {
        clearInterval(update);
        ani = 2.8;
        speed = 170;
        opnspd = 30;
        update = setInterval(function () {
            increase()
        }, speed);
    }

    if (i > 200) {
        clearInterval(update);
        ani = 2.3;
        speed = 140;
        opnspd = 25;
        update = setInterval(function () {
            increase()
        }, speed);
    }

    if (i > 250) {
        clearInterval(update);
        ani = 2;
        speed = 110;
        opnspd = 20;
        update = setInterval(function () {
            increase()
        }, speed);
    }
    if (i > 320) {
        clearInterval(update);
        ani = 1.6;
        speed = 80;
        opnspd = 15;
        update = setInterval(function () {
            increase()
        }, speed);
    }
    if (i > 470) {
        clearInterval(update);
        ani = 1.3;
        speed = 50;
        opnspd = 10;
        update = setInterval(function () {
            increase()
        }, speed);
    }
    i++;
    if (i > 600) {
        clearInterval(update);

    }
    //timer();

}


function timer() {
    clearInterval(opponentCarPos);
    currentsecondsPassed = (new Date().getTime() - start) / 1000;
    //alert(currentsecondsPassed)
    opponentCar();
}

function opponentCar() {
    if (currentsecondsPassed > incomngCarTime) {
        start = new Date().getTime();
        var random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        if (random == 1) {
            pos = "15%";
        }
        else {
            pos = "30%";
        }
        document.getElementsByClassName("opponentcar")[0].style.left = pos;
        // document.getElementsByClassName("opponentcar")[0].style.animation="opponent 10s  1";
        var perc = 100;
        opponentCarPos = setInterval(function () {
            document.getElementsByClassName("opponentcar")[0].style.bottom = perc + "%";
            perc--;
            if (perc < -20)
                clearInterval(opponentCarPos);
            if (carpos == 1 && random == 1 || carpos == 2 && random == 2) {
                if (perc == 38) {
                    clearInterval(gameTimeInterval);
                    clearInterval(startnendgame);
                    clearInterval(opponentCarPos);
                    clearInterval(update);
                    document.getElementById("highway").style.animation = "highway 0s linear infinite";

                }
            }

        }, opnspd);
    }

}
var opponentCarPos;