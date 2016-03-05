var sounds = new Array();
sounds['R'] = 'Rook.wav'
sounds['Q'] = 'Queen.wav'
sounds['N'] = 'Knight.wav'
sounds['B'] = 'Bishop.wav'
sounds['K'] = 'King.wav'
sounds['x'] = 'Takes.wav'
sounds['a'] = 'A.wav'
sounds['b'] = 'B.wav'
sounds['c'] = 'C.wav'
sounds['d'] = 'D.wav'
sounds['e'] = 'E.wav'
sounds['f'] = 'F.wav'
sounds['g'] = 'G.wav'
sounds['h'] = 'H.wav'
sounds['1'] = '1.wav'
sounds['2'] = '2.wav'
sounds['3'] = '3.wav'
sounds['4'] = '4.wav'
sounds['5'] = '5.wav'
sounds['6'] = '6.wav'
sounds['7'] = '7.wav'
sounds['8'] = '8.wav'
sounds['s'] = 'sc.wav'
sounds['l'] = 'lc.wav'

var moveLetters = new Array();

setInterval(function(){ announceMove(); }, 500);

function announceMove () {
    console.log(moveLetters)
    if(moveLetters.length > 0){
        file = 'sounds/' + sounds[moveLetters[0]]
        console.log(file)
        var audio = new Audio(chrome.extension.getURL(file))
        audio.play()
        moveLetters.shift()
    }
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function( mutations ) {
    lastMove = $(document).find('move.active');
    if(lastMove != null){
        move = lastMove[0].textContent
        if(move == 'O-O'){
            moveLetters.push('s')
            return;
        }
        if(move == 'O-O-O'){
            moveLetters.push('l')
            return;
        }
        moveLetters = move.split('')
    }
});

var config = {
  subtree: true,
  childList: true
};

var target = document.querySelector('.replay');

window.console.log('started');
observer.observe(target, config);

