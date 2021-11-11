// Countries array with objects and elemnets for queestions and answers

var countries = [
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
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        river: 'Murray River',
        mountain: 'Mount Kosciuszko',
        continent: 'Australia'
    },
    {
        name: 'New Zealand',
        capital: 'Wellington',
        river: 'Waikato River',
        mountain: 'Mount Cook',
        continent: 'Australia'
    },
    {
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        river: 'Sepik River',
        mountain: 'Mount Wilhelm',
        continent: 'Australia'
    }
]


/**
 * Event listener for the game type
 * Code Source: https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js
 */ 

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

/* *
 *  Code for choosing a random country name from the countries array to be inserted into the question
 * Code source: https://stackoverflow.com/questions/37167264/javascript-output-random-object-from-array-of-objects
 * */ 
function randomCountry() {
    let randomObject = Math.floor(Math.random() * 28);
    let randomCountry = countries[randomObject].name;
    return randomCountry;
}

// Main game loop

function runGame(gameType) {
    
        
    let countryName = randomCountry();
                
    let correctObject = countries.find(function(country, index) {
    if(country.name === countryName)
    return true;
    });
    
    //Function for creating capitals array in the capitals game

    function capitalsSub() {
        let capitalsArr = getObjValues(countries, "capital");
        let correctCapital = correctObject;
        
        // Using shuffle function ArrElements to shuffle capitals array
        shuffleArrElements(capitalsArr);
                
        // Limiting the array to two capitals
        let capitalsSub = capitalsArr.slice(0, 2);
               
        // Getting the correct answer (name of the capital) form the object
        correctCapital = correctCapital.capital;
    
        // Checking if the limited array already includes the correct answer/capital
        let checkSubArr = capitalsSub.includes(correctCapital);
        
        // If the array does not include correct answer/capital, the correct answer is added to the array. If it's already present, third element from the shuffled capitals array is added instead
        if (checkSubArr !== true) {
            capitalsSub.push(correctCapital);
        } else {
            capitalsSub.push(capitalsArr[2]);
        }
        return capitalsSub;
        
    }

    function riversSub() {
        
        let riversArr = getObjValues(countries, "river");
        
        let correctRiver = correctObject;
                
        shuffleArrElements(riversArr);
                
        let riversSub = riversArr.slice(0, 2);
    
        correctRiver = correctRiver.river;
            
        let checkSubArr = riversSub.includes(correctRiver);
                   
        if (checkSubArr !== true) {
            riversSub.push(correctRiver);
        } else {
            riversSub.push(riversArr[2]);
        }
        return riversSub;
        
    }

    function mountainsSub() {
        
        let mountainsArr = getObjValues(countries, "mountain");
    
        let correctMountain = correctObject;
                
        shuffleArrElements(mountainsArr);
            
        let mountainsSub = mountainsArr.slice(0, 2);
        
        correctMountain = correctMountain.mountain;
            
        let checkSubArr = mountainsSub.includes(correctMountain);
           
        if (checkSubArr !== true) {
            mountainsSub.push(correctMountain);
        } else {
            mountainsSub.push(mountainsArr[2]);
        }
        return mountainsSub;
        
    }

    function continentsSub() {
        
        let continentsArr = getObjValues(countries, "continent");

        /**
         * Function to remove duplicate continents from the array
         * Code source: https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
        */

        let nonDuplicateContArr = [...new Set(continentsArr)];

        let correctContinent = correctObject;
        
        shuffleArrElements(nonDuplicateContArr);
    
        let continentsSub = nonDuplicateContArr.slice(0, 2);
    
        correctContinent = correctContinent.continent;
    
        let checkSubArr = continentsSub.includes(correctContinent);
           
        if (checkSubArr !== true) {
            continentsSub.push(correctContinent);
        } else {
            continentsSub.push(nonDuplicateContArr[2]);
        }
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
    
}

/**
 * Function for extracting arrays from object property values
 * Code source: https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
 **/

function getObjValues(input, field) {
    let output = [];
    for (var i=0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
}

/**
 * Function for random shuffling an array
 * Code source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
**/

function shuffleArrElements(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Function for gettin selected radio button answer text
 * Code source: https://stackoverflow.com/questions/14709617/how-do-i-get-the-label-of-the-selected-radio-button-using-javascript
 **/ 
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
/**
 * Event handler for radio buttons
 * Code source: https://stackoverflow.com/questions/8922002/attach-event-listener-through-javascript-to-radio-button
 */

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

/**
 * Function for unchecking radio buttons
 * Code source: https://www.techiedelight.com/uncheck-radio-button-javascript/
 */

function ucheckRadio() {
    let radio = document.querySelector('input[type=radio][name=answers]:checked');
    radio.checked = false;
}


function checkCapitalAnswer() {
    
    let selectedAnswer = getAnswersText();

    let questionWord = document.getElementById("country-name").innerText;
    
    /**
     * Function for getting whole country object for the country appearing in the question. Property value from this object is then compared with selected answer to verify if the ansswer is correct or not.
     * Code source: https://usefulangle.com/post/3/javascript-search-array-of-objects
     */
    
    let correctObject = countries.find(function(country, index) {
        if(country.name === questionWord)
        return true;
    });

    let corrCapValue = correctObject.capital;
    
    if (selectedAnswer === corrCapValue) {
        alert('Your answer is correct!');
        incrementCorrectAnswer();
        runGame('capitals');
        ucheckRadio();
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrCapValue}!`);
            incrementWrongAnswer();
            runGame('capitals');
            ucheckRadio();
        };
    
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
        ucheckRadio();
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrRivValue}!`);
            incrementWrongAnswer();
            runGame('rivers');
            ucheckRadio();
        };
            
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
        ucheckRadio();
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrMountValue}!`);
            incrementWrongAnswer();
            runGame('mountains');
            ucheckRadio();
        };
            
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
        ucheckRadio();
        } else {
            alert(`Your answer is ${selectedAnswer}. The correct answer is ${corrContValue}!`);
            incrementWrongAnswer();
            runGame('continents');
            ucheckRadio();
        };
            
}

/**
 * Functions for recording the score
 * Code source: https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js
 */

function incrementCorrectAnswer() {

    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

/**
 * Function displaying game question and answers
 * Code source: https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js
 */ 

function displayCapitalsQandA(question, element, array) {
    document.getElementById('question').textContent = question;
    document.getElementById('country-name').textContent = element;
    document.getElementById('answerA').textContent = array[0];
    document.getElementById('answerB').textContent = array[1];
    document.getElementById('answerC').textContent = array[2];
    
}
