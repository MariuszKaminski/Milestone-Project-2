
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
        mountain: 'Pico del Teide'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        river: 'Po',
        mountain: 'Monte Bianco'
    },
    {
        name: 'United Kingdom',
        capital: 'London',
        river: 'Severn',
        mountain: 'Ben Nevis'
    }
]


// Event listener for game type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {                
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

function randomCountry() {
    let randomObject = Math.floor(Math.random() * 5);
    let randomCountry = countries[randomObject].name;
    return randomCountry;
}

let countryName = randomCountry();

function runGame(gameType) {
    
    let newCountryArr = capitalsSub();  
    
    //let newRiverArr = riversSub();

    if (gameType === "capitals") {
        displayCapitalsQandA(countryName, newCountryArr);        
    
    } else if (gameType === "rivers"){
        displayRiversQandA(riverName, newRiverArr)
    
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
function capitalsSub() {
    let capitalsArr = getObjValues(countries, "capital");
    console.log(capitalsArr);
    
    let correctCapital = correctObject;
    // Using shuffle function ArrElements to shuffle capitals array
    shuffleArrElements(capitalsArr);

    console.log(capitalsArr);

    // Limiting the array to two capitals
    let capitalsSub = capitalsArr.slice(0, 2);

    console.log(capitalsSub);

     // finding the opbject with the correct answer (capital) for the country given in the question


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
    return capitalsSub;
    //console.log(capitalsSub);
}

function riversSub() {
    let riversArr = getObjValues(countries, "river");
    console.log(riversArr);
    let correctRiver = correctObject;
    // Using shuffle function ArrElements to shuffle capitals array
    shuffleArrElements(riversArr);

    console.log(riversArr);

    // Limiting the array to two capitals
    let riversSub = riversArr.slice(0, 2);

    console.log(riversSub);

     // finding the opbject with the correct answer (capital) for the country given in the question


    console.log(correctRiver);

    // Getting the correct answer (name of the capital) form the object
    correctRiver = correctRiver.river;

    console.log(correctRiver);

    // Checking if the limited array already incluedes the correct answer/capital
    let checkSubArr = riversSub.includes(correctRiver);

    console.log(checkSubArr);

    // If the array does not include correct answer/capital, the correct answer is added to the array. If it's already present, third element from the shuffled capitals array is added instead
    if (checkSubArr !== true) {
        riversSub.push(correctRiver);
    } else {
        riversSub.push(riversArr[2]);
    };
    return riversSub;
    //console.log(capitalsSub);
}

let correctObject = countries.find(function(country) {
    if(country.name === countryName)
    return true;
});


let correctCapElement = correctObject.capital;
let correctRivElement = correctObject.river;

//let selectedAnswer = '';

//Function to get selected answer text
function getAnswersText() {
    
    let radioes = document.getElementsByName('answers');
    
        for (let i=0; i < radioes.length; i++) {
            if (radioes[i].checked) {
            let selector = 'label[for=' + radioes[i].id + ']';
            let label = document.querySelector(selector);
            let answerText = label.innerHTML;
            return answerText;
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

function checkGameType() {
    let question = document.getElementById("question").innerText;
    
        if (question === 'Which city is the capital of ') {
            return "capitals";
            
        } else {
            alert(`Unimplemented question ${question}`);
            throw `Unimplemented operator ${question}. Aborting!`;
        }
}

let checkedGame = checkGameType();

function checkAnswer() {
    let selectedAnswer = getAnswersText();

    let correctCapAnswer = correctCapElement;
    
    if (selectedAnswer === correctCapAnswer) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();        
    } else {
        alert(`Your answer is ${selectedAnswer}. The correct answer is ${correctCapAnswer}!`);
        incrementWrongAnswer();        
    };
    //uncheckRadio();
    runGame('capitals');
    randomCountry();
    let element = randomCountry();
    capitalsSub();
    let array = capitalsSub();
    displayCapitalsQandA(element, array);
}

function incrementCorrectAnswer() {

    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}
// function displaying random country in the question and 3 answers for the capitals game
function displayCapitalsQandA(element, array) {
    document.getElementById('country-name').textContent = element;
    document.getElementById('answerA').textContent = array[0];
    document.getElementById('answerB').textContent = array[1];
    document.getElementById('answerC').textContent = array[2];
}

function uncheckRadio() {
    
}

function displayRiversQuestion() {

}

function displayMountainsQuestion() {

}

function displayContinentsQuestion() {

}

