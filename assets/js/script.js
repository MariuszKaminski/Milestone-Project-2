
let countries = [
    {
        name: 'France',
        capital: 'Paris',
        river: 'Loire',
        mountain: 'Mont Blanc'
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        river: 'Rhine',
        mountain: 'Zugspitze'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        river: 'Tagus',
        mountain: 'Pico del Teide',
    },
    {
        name: 'Italy',
        capital: 'Rome',
        river: 'Po',
        mountain: 'Monte Bianco'
    }
]

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("capitals");

});

let randomObject = Math.floor(Math.random() * 4);
let countryName = countries[randomObject].name;
console.log(countryName);

function runGame(gameType) {

    if (gameType === "capitals") {
        displayCapitalsQuestion(countryName);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function getObjValues(input, field) {
    let output = [];
    for (var i=0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

function shuffleArrElements(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let capitalsArr = getObjValues(countries, "name");
console.log(capitalsArr);
shuffleArrElements(capitalsArr);


//capitalsShuffled = shuffleArrElements(capitalsArr);
//capitalsSub = capitalsArr.slice(0, 2).push(countryName);
//let capitalsSubCorr = [];
//capitalsSubCorr = capitalsSub.push(countryName[0]);

   
//let capitalsAddCorr = capitalsSub.push(countryName);


function checkAnswer() {

}

function checkCorrectAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementWrongAnswer() {

}

function displayCapitalsQuestion(countryName) {
    document.getElementById('country-name').textContent = countryName;
}


function displayCapitalsAnswers() {

}


function displayRiversQuestion() {

}

function displayMountainsQuestion() {

}

function displayContinentsQuestion() {

}


