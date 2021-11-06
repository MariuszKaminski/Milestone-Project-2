
let countries = [
    {
        name: 'France',
        capital: 'Paris',
        river: 'Loire',
        mountain: 'Mont Blanc',
        continent: 'Europe'
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        river: 'Rhine',
        mountain: 'Zugspitze',
        continent: 'Europe'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        river: 'Tagus',
        mountain: 'Pico del Teide',
        continent: 'Europe'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        river: 'Po',
        mountain: 'Monte Bianco',
        continent: 'Europe'
    },
    {
        name: 'United Kingdom',
        capital: 'London',
        river: 'Severn',
        mountain: 'Ben Nevis',
        continent: 'Europe'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        river: 'MacKenzie',
        mountain: 'Mount Logan',
        continent: 'North America'
    },
    {
        name: 'United States of America',
        capital: 'Washington, D.C.',
        river: 'Missouri',
        mountain: 'Denali',
        continent: 'North America'
    },
    {
        name: 'Mexico',
        capital: 'Mexico City',
        river: 'Rio Grande',
        mountain: 'Pico de Orizaba',
        continent: 'North America'
    },
    {
        name: 'Cuba',
        capital: 'Havana',
        river: 'Rio Cauto',
        mountain: 'Pico Turquino',
        continent: 'North America'
    },
    {
        name: 'Guatemala',
        capital: 'Guatemala City',
        river: 'Rio Motagua',
        mountain: 'Volcán Tajumulco',
        continent: 'North America'
    },
    {
        name: 'Brazil',
        capital: 'Brasilia',
        river: 'Amazon',
        mountain: 'Pico Alto',
        continent: 'South America'
    },
    {
        name: 'Colombia',
        capital: 'Bogotá',
        river: 'Magdalena River',
        mountain: 'Pico Cristóbal Cólon',
        continent: 'South America'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        river: 'Paraná River',
        mountain: 'Pico Alto',
        continent: 'South America'
    },
    {
        name: 'Chile',
        capital: 'Santiago',
        river: 'Rio Loa',
        mountain: 'Ojos del Salado',
        continent: 'South America'
    },
    {
        name: 'Peru',
        capital: 'Lima',
        river: 'Ucayali',
        mountain: 'Huascarán',
        continent: 'South America'
    },
    {
        name: 'China',
        capital: 'Beijing',
        river: 'Yangtze',
        mountain: 'Mount Everest',
        continent: 'Asia'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        river: 'Indus',
        mountain: 'Kangchenjunga',
        continent: 'Asia'
    },
    {
        name: 'Kazakhstan',
        capital: 'Nur-Sultan',
        river: 'Irtysh',
        mountain: 'Khan Tengri',
        continent: 'Asia'
    },
    {
        name: 'Indonesia',
        capital: 'Jakarta',
        river: 'Kapuas River',
        mountain: 'Puncak Jaya',
        continent: 'Asia'
    },
    {
        name: 'Iran',
        capital: 'Tehran',
        river: 'Karun',
        mountain: 'Mount Damavand',
        continent: 'Asia'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        river: 'Chelif',
        mountain: 'Mount Tahat',
        continent: 'Africa'
    },
    {
        name: 'Democratic Republic of Kongo',
        capital: 'Kinshasa',
        river: 'Lualaba',
        mountain: 'Mount Stanley',
        continent: 'Africa'
    },
    {
        name: 'Sudan',
        capital: 'Khartoum',
        river: 'Nile',
        mountain: 'Deriba Caldera',
        continent: 'Africa'
    },
    {
        name: 'Nigeria',
        capital: 'Abuja',
        river: 'Niger River',
        mountain: 'Chappal Waddi',
        continent: 'Africa'
    },
    {
        name: 'Kenya',
        capital: 'Nairobi',
        river: 'Tana River',
        mountain: 'Mount Kenya',
        continent: 'Africa'
    }
]


// Event listener for game type
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkGameType();
                if (checkGameType() === "capitals") {                
                    checkCapitalAnswer();
                } else if (checkGameType() === "rivers") {
                    checkRiverAnswer();
                } else if (checkGameType() === "mountains") {
                    checkMountainAnswer();
                } else if (checkGameType() === "continents") {
                    checkContinentAnswer();
                }
                                               
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
    let randomObject = Math.floor(Math.random() * 20);
    let randomCountry = countries[randomObject].name;
    return randomCountry;
}

function runGame(gameType) {
    
        
    let countryName = randomCountry();
                
    let correctObject = countries.find(function(country, index) {
    if(country.name === countryName)
    return true;
    });
    
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
                
        shuffleArrElements(riversArr);
    
        console.log(riversArr);
    
        let riversSub = riversArr.slice(0, 2);
    
        console.log(riversSub);
                    
        console.log(correctRiver);
    
        correctRiver = correctRiver.river;
    
        console.log(correctRiver);
    
        let checkSubArr = riversSub.includes(correctRiver);
    
        console.log(checkSubArr);
           
        if (checkSubArr !== true) {
            riversSub.push(correctRiver);
        } else {
            riversSub.push(riversArr[2]);
        };
        return riversSub;
        
    }

    function mountainsSub() {
        
        let mountainsArr = getObjValues(countries, "mountain");
        console.log(mountainsArr);
        let correctMountain = correctObject;
                
        shuffleArrElements(mountainsArr);
    
        console.log(mountainsArr);
    
        let mountainsSub = mountainsArr.slice(0, 2);
    
        console.log(mountainsSub);
                    
        console.log(correctMountain);
    
        correctMountain = correctMountain.mountain;
    
        console.log(correctMountain);
    
        let checkSubArr = mountainsSub.includes(correctMountain);
    
        console.log(checkSubArr);
           
        if (checkSubArr !== true) {
            mountainsSub.push(correctMountain);
        } else {
            mountainsSub.push(mountainsArr[2]);
        };
        return mountainsSub;
        
    }

    function continentsSub() {
        
        let continentsArr = getObjValues(countries, "continent");
        console.log(continentsArr);
        let correctContinent = correctObject;
        //add a function to remove duplicate continents from the array
        shuffleArrElements(continentsArr);
    
        console.log(continentsArr);
    
        let continentsSub = continentsArr.slice(0, 2);
    
        console.log(continentsSub);
                    
        console.log(correctContinent);
    
        correctContinent = correctContinent.continent;
    
        console.log(correctContinent);
    
        let checkSubArr = continentsSub.includes(correctContinent);
    
        console.log(checkSubArr);
           
        if (checkSubArr !== true) {
            continentsSub.push(correctContinent);
        } else {
            continentsSub.push(continentsArr[2]);
        };
        return continentsSub;
        
    }
    
    let capitalsQuestion = 'Which city is the capital of ';

    let riversQuestion = 'Which is the longest river in ';
    
    let mountainsQuestion = 'Which is the tallest mountain in ';

    let continentsQuestion = 'In which continent is ';
    
    if (gameType === "capitals") {
        let newArray = capitalsSub();
        displayCapitalsQandA(capitalsQuestion, countryName, newArray);
    } else if (gameType === "rivers") {
        let newArray = riversSub();
        displayCapitalsQandA(riversQuestion, countryName, newArray);
    } else if (gameType === "mountains") {
        let newArray = mountainsSub();
        displayCapitalsQandA(mountainsQuestion, countryName, newArray);
    } else if (gameType === "continents") {
        let newArray = continentsSub();
        displayCapitalsQandA(continentsQuestion, countryName, newArray);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    //randomCountry();
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
            
        } else if (question === 'Which is the longest river in ') {
            return "rivers";
        
        } else if (question  === 'Which is the tallest mountain in ') {
            return "mountains";
        
        } else if (question === 'In which continent is ') {
            return "continents";
        
        } else {
            alert(`Unimplemented question ${question}`);
            throw `Unimplemented operator ${question}. Aborting!`;
        }
}

//let checkedGame = checkGameType();


function checkCapitalAnswer() {
    
    let selectedAnswer = getAnswersText();

    let questionWord = document.getElementById("country-name").innerText;

    let correctObject = countries.find(function(country, index) {
        if(country.name === questionWord)
        return true;
    });

    let corrCapValue = correctObject.capital;
    
    if (selectedAnswer === corrCapValue) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();
        runGame('capitals');
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrCapValue}!`);
            incrementWrongAnswer();
            runGame('capitals');
        };
    
    //uncheckRadio();
        
}

function checkRiverAnswer() {
    
    let selectedAnswer = getAnswersText();

    let questionWord = document.getElementById("country-name").innerText;

    let correctObject = countries.find(function(country, index) {
        if(country.name === questionWord)
        return true;
    });

    let corrRivValue = correctObject.river;
    
    if (selectedAnswer === corrRivValue) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();
        runGame('rivers');
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrRivValue}!`);
            incrementWrongAnswer();
            runGame('rivers');
        };
    
    //uncheckRadio();
        
}

function checkMountainAnswer() {
    
    let selectedAnswer = getAnswersText();

    let questionWord = document.getElementById("country-name").innerText;

    let correctObject = countries.find(function(country, index) {
        if(country.name === questionWord)
        return true;
    });

    let corrMountValue = correctObject.mountain;
    
    if (selectedAnswer === corrMountValue) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();
        runGame('mountains');
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrMountValue}!`);
            incrementWrongAnswer();
            runGame('mountains');
        };
    
    //uncheckRadio();
        
}

function checkContinentAnswer() {
    
    let selectedAnswer = getAnswersText();

    let questionWord = document.getElementById("country-name").innerText;

    let correctObject = countries.find(function(country, index) {
        if(country.name === questionWord)
        return true;
    });

    let corrContValue = correctObject.continent;
    
    if (selectedAnswer === corrContValue) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();
        runGame('continents');
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrContValue}!`);
            incrementWrongAnswer();
            runGame('continents');
        };
    
    //uncheckRadio();
        
}

function incrementCorrectAnswer() {

    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}
// function displaying game question and answers
function displayCapitalsQandA(question, element, array) {
    document.getElementById('question').textContent = question;
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