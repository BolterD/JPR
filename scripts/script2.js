function finalScore(round) {

    var correct = 0;

    var selectValue;

    var questions = document.getElementsByClassName("question");

    var numOfQuestions = questions.length;

    for (var i = 0; i < questions.length; i++) {

        selectValue = questions[i].options[questions[i].selectedIndex].value;

        if (selectValue === "right"){

            correct++;
        }
    }

    if (round === false){
        document.getElementById("scoreDisplay").innerHTML = (100 / numbOfQuestions) * correct;
    }

    else {
        document.getElementById("scoreDisplay").innerHTML = Math.round((100 / numOfQuestions) * correct);
    }
}