let deck = new Deck();
let player = [];
for (let i = 0; i < 4; i++) {
    let gamer = new Player(`Máy`);
    player.push(gamer);
}
let dist = document.getElementById('distribute');
dist.addEventListener('click', distributeCards);

player[0].money = 100000;
let allbet = [0, 0, 0];

let display1 = document.getElementById('player1');
let display2 = document.getElementById('player2');
let display3 = document.getElementById('player3');
let display4 = document.getElementById('player4');

function createName() {
    player[0].name = prompt('Nhập tên nhà cái:');
    player[1].name = prompt('Con cưng địa chủ:');
    player[2].name = prompt('Cháu nội chủ tịch');
    player[3].name = prompt('Golfer G63:');
}

function distributeCards() {
    deck.cards = [];
    deck.create();
    deck.shuffle();
    resetCard();
    for (let i = 0; i < 4; i++) {
        deck.distribute(player[i]);
    }
    hide();
    hiddenInfo(false);
    for (let i = 2; i < 5; i++) {
        document.getElementById(`allmoneybet${i}`).innerHTML = '';
    }
    allbet = [0, 0, 0];
    document.getElementById('distribute').disabled = true;
}

function hide() {
    player[0].hideCards(display1);
    player[1].hideCards(display2);
    player[2].hideCards(display3);
    player[3].hideCards(display4);
}

function show1() {
    player[0].showCards(display1);
    show2();
    show3();
    show4();
    checkWin();
    document.getElementById('distribute').disabled = false;
}

function show2() {
    player[1].showCards(display2);
    document.getElementById(`allmoneybet2`).hidden = true;
}

function show3() {
    player[2].showCards(display3);
    document.getElementById(`allmoneybet3`).hidden = true;
}

function show4() {
    player[3].showCards(display4);
    document.getElementById(`allmoneybet4`).hidden = true;
}

function resetCard() {
    for (let i = 0; i < player.length; i++) {
        player[i].hands = [];
    }
}

function hiddenInfo(status) {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`playerinfo${i}`).hidden = status;
    }
}


function bet(i) {
    if (player[i - 1].money >= document.getElementById(`moneybet${i}`).value) {
        allbet[i - 2] += +document.getElementById(`moneybet${i}`).value;
        player[i - 1].money -= +document.getElementById(`moneybet${i}`).value;
        document.getElementById(`allmoneybet${i}`).innerHTML = `Tổng tiền cược: <strong>${allbet[i - 2]} $</strong>`;
        document.getElementById(`moneybet${i}`).value = '';
        showPlayerMoney();
    } else {
        document.getElementById(`moneybet${i}`).value = '';
        document.getElementById(`moneybet${i}`).placeholder = 'không đủ tiền'
    }
}


function showPlayerMoney() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`playermoney${i}`).innerHTML = `<strong>${player[i - 1].money} $</strong>`;
    }
}

showPlayerMoney();


function checkWin() {
    let host = player[0];
    let winner = host;
    for (let i = 1; i < player.length; i++) {

        if (player[i].getScore() > host.getScore()) {
            winner = player[i];
            host.money -= allbet[i - 1];
            player[i].money += allbet[i - 1] * 2;
        } else if (player[i].getScore() == host.getScore()) {
            if (player[i].getValueHighestCard() > host.getValueHighestCard()) {
                winner = player[i];
                host.money -= allbet[i - 1];
                player[i].money += allbet[i - 1] * 2;
            } else {
                winner = host;
                host.money += allbet[i - 1];
            }
        } else {
            winner = host;
            host.money += allbet[i - 1];
        }
    }
    alert('LƯỢM TIỀN!! LƯỢM TIỀN!!!');
    showPlayerMoney();
}


