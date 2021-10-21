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



function runGame(gameType) {

    let random_object = Math.floor(Math.random() * 4);
    let countryName = countries[random_object].name;
    
    if (gameType === "capitals") {
        displayCapitalsQuestion(countryName);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function getCapitals(input, field) {
    let output = [];
    for (var i=0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

let capitalsArr = getCapitals(countries, "name");
//let capitalsSub = capitalsArr.slice(0, 2);
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

function displayCapitalsAnswers()


function displayRiversQuestion() {

}

function displayMountainsQuestion() {

}

function displayContinentsQuestion() {

}


