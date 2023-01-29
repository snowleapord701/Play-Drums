
//set all buttons to an array
const buttons = document.querySelectorAll('button');

//Make a event listener for all buttons
buttons.forEach(button => {
    button.addEventListener('click', e => {
        //Call getInstrument function to get the name of the matching audio file to user click
        console.log(e.target.innerHTML)
        let instrumentAudioFile = getInstrument(e.target.innerHTML);
        new Audio(`./sounds/${instrumentAudioFile}`).play();
        //console.log('Click event was triggered.');
    })
    
})
//Make event listner that will capture all key strokes.
//Then check if the key pressed equates to one of the key choices.
//If true then play correct audio file based on the letter chosen.
document.body.addEventListener('keydown', e => {
    let userSelectKey = e.key;
    let result = keyCheck(userSelectKey);
    if (result) {
        let instrumentAudioFile2 = getInstrument(e.key);
        new Audio(`./sounds/${instrumentAudioFile2}`).play();
        
    }
    
})


function getInstrument(userLetterSelect) {
    switch(userLetterSelect) {
        case 'w': 
            return 'tom-1.mp3';
            break;
        case 'a': 
            return 'tom-2.mp3';
            break;
        case 's': 
            return 'tom-3.mp3';
            break;
        case 'd':
            return 'tom-4.mp3';
            break;
        case 'j':
            return 'snare.mp3'
            break;
        case 'k':
            return 'crash.mp3';
            break;
        case 'l':
            return 'kick-bass.mp3'
            break;
        default:
            alert('Error, Houston we have a problem.');
    }
}

function keyCheck(userKey) {
    let letterArray = ['w','a','s','d','j','k','l'];
    
    for (let x = 0; x <= letterArray.length; x++) {
        if (userKey == letterArray[x]) {
            return 'true';
        } 
    }
}