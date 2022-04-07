


let inds = document.querySelector('#mumScore');
let paks = document.querySelector('#bangScore');
let indw = document.querySelector('#mumWic');
let pakw = document.querySelector('#bangWic');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let six = document.querySelector('#six');
let out = document.querySelector('#out');
let dot = document.querySelector('#dot');
let wic = document.querySelector('#wic');
//alert(inds.textContent)
let b2 = 30;
let startM = document.querySelector('#start');
startM.addEventListener('click', play);

function play() {
    if (startM.innerText == "Start Match") {
        document.querySelector('#status').textContent = 'India is Playing';
        document.querySelector('#balls').textContent = b2;
        document.querySelector('#text').textContent = ' Balls Left';
        startM.innerText = "Reset";
        game();
    }
    else if (startM.innerText == "Reset") {
        location.reload();
    }
}

function updateScore(s) {
    if (document.querySelector('#status').textContent == 'India is Playing' && startM.innerText == "Reset") {
        if (s > -1) {
            let a = Number(inds.textContent);
            a = a + s;
            inds.textContent = a;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (balls >= 2)
                document.querySelector('#balls').textContent = balls;
            else if (balls == 1) {
                document.querySelector('#balls').textContent = balls;
                document.querySelector('#text').textContent = ' Ball Left';
            }
            else {
                play2();
            }
        }
        else {
            let a = (-1) * Number(indw.textContent);
            a = a + s;
            if (a != -10) {
                indw.textContent = (-1) * a;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
                else {
                    play2();
                }
            }
            else {
                indw.textContent = (-1) * a;
                play2();
            }
        }
    }
}

function game() {
    if (startM.innerText == "Reset") {
        one.addEventListener('click', function () {
            updateScore(1)
        })
        two.addEventListener('click', function () {
            updateScore(2)
        })
        three.addEventListener('click', function () {
            updateScore(3)
        })
        four.addEventListener('click', function () {
            updateScore(4)
        })
        six.addEventListener('click', function () {
            updateScore(6)
        })
        dot.addEventListener('click', function () {
            updateScore(0)
        })
        wic.addEventListener('click', function () {
            updateScore(-1)
        })
    }
    else
        play();
}

function play2() {
    document.querySelector('#status').textContent = 'Pakistan is Playing';
    document.querySelector('#balls').textContent = b2;
    document.querySelector('#text').textContent = ' Balls Left';
    game2();
}

function updateScore2(s) {
    if (document.querySelector('#status').textContent == 'Pakistan is Playing' && startM.innerText == "Reset") {
        if (s > -1) {
            let a = Number(paks.textContent);
            let b = Number(inds.textContent);
            a = a + s;
            paks.textContent = a;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (balls > 0 && a <= b) {
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                if (balls == 0 && a < b) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'India Won';
                }
                else if (balls == 0 && a == b) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Tie Match';
                }
                else {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Pakistan Won';
                }

            }
        }
        else {
            let a = (-1) * Number(pakw.textContent);
            a = a + s;
            if (a != -10) {
                pakw.textContent = (-1) * a;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                pakw.textContent = (-1) * a;
                let a1 = Number(paks.textContent);
                let b1 = Number(inds.textContent);
                if (a1 < b1) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'India Won';
                }
                else if (a1 == b1) {
                    document.querySelector('#balls').textContent = 'Match';
                    document.querySelector('#text').textContent = ' is Over';
                    document.querySelector('#status').textContent = 'Tie Match';
                }
            }
        }
    }

}

function game2() {
    one.addEventListener('click', function () {
        updateScore2(1)
    })
    two.addEventListener('click', function () {
        updateScore2(2)
    })
    three.addEventListener('click', function () {
        updateScore2(3)
    })
    four.addEventListener('click', function () {
        updateScore2(4)
    })
    six.addEventListener('click', function () {
        updateScore2(6)
    })
    dot.addEventListener('click', function () {
        updateScore2(0)
    })
    wic.addEventListener('click', function () {
        updateScore2(-1)
    })
}