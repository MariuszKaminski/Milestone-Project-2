


document.addEventListener("DOMConentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked $(gameType)`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function checkCorrectAnswer() {

}

function incrementCorrectAnswer() {

}

function incrementWrongAnswer() {

}

function displayCapitalsQuestion() {

}

function displayRiversQuestion() {

}

function displayMountainsQuestion() {

}

function displayContinentsQuestion() {

}


