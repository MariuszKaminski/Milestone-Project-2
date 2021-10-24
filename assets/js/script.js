
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


// Event listener for game type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                //alert("You clicked Submit!");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("capitals");

});
// Code for choosing a random country name from the countries array to be inserted into the question
let randomObject = Math.floor(Math.random() * 4);
let countryName = countries[randomObject].name;
    console.log(countryName);


function runGame(gameType) {
    
    if (gameType === "capitals") {
        displayCapitalsQandA(countryName, capitalsSub);
        //displayCapitalsAnswers(capitalsSub);
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

// CAPITALS GAME CODE

//Getting an array of capitals

let capitalsArr = getObjValues(countries, "capital");
console.log(capitalsArr);

// Using shuffle function ArrElements to shuffle capitals array
shuffleArrElements(capitalsArr);

console.log(capitalsArr);

// Limiting the array to two capitals
let capitalsSub = capitalsArr.slice(0, 2);

console.log(capitalsSub);

// finding the opbject with the correct answer (capital) for the country given in the question
let correctCapital = countries.find(function(country, index) {
    if(country.name == countryName)
    return true;
});

console.log(correctCapital);

// Getting the correct answer (name of the capital) form the object
correctCapital = correctCapital.capital;

console.log(correctCapital);

// Checking if the limited array already incluedes the correct answer/capital
let checkSubArr = capitalsSub.includes(correctCapital);

console.log(checkSubArr);

// If the array does not include correct answer/capital, the correct answer is added to the array. If it's already present, third element from the shuffled capitals array is added instead
if (checkSubArr !== true) {
    capitalsSub.push(correctCapital);
} else {
    capitalsSub.push(capitalsArr[2]);
};

console.log(capitalsSub);



let selectedAnswer = '';

//Function to get selected answer text
function getAnswersText() {
    
    let radioes = document.getElementsByName('answers');
    
        for (let i=0; i < radioes.length; i++) {
            if (radioes[i].checked) {
            let selector = 'label[for=' + radioes[i].id + ']';
            let label = document.querySelector(selector);
            let answerText = label.innerHTML;
            selectedAnswer = answerText;
            }
        }
}

//Event handler for radio buttons
let radioes = document.forms[0].elements['answers'];
    for (radio in radioes) {
        radioes[radio].onclick = function() {
            getAnswersText();
        }
    }
    

function checkAnswer() {
    if (selectedAnswer === correctCapital) {
        alert('Your answer is correct!');
    } else {
        alert('Your answer is incorrect!');
    }   
}

function incrementCorrectAnswer() {

}

function incrementWrongAnswer() {

}
// function displaying random country in the question and 3 answers for the capitals game
function displayCapitalsQandA(countryName, capitalsSub) {
    document.getElementById('country-name').textContent = countryName;
    document.getElementById('answerA').textContent = capitalsSub[0];
    document.getElementById('answerB').textContent = capitalsSub[1];
    document.getElementById('answerC').textContent = capitalsSub[2];
}

function displayRiversQuestion() {

}

function displayMountainsQuestion() {

}

function displayContinentsQuestion() {

}

