const form = document.querySelector(".exercice-form");
const buttonSubmit = document.querySelector(".submit-answares");
const questions = document.querySelectorAll(".form-question-body");
const formAnswareStatus = form.querySelector(".form-status");
var questionIndex;
var answers = {
    exerciciosLogica: [0, 2, 0],
    exerciciosBibliotecasC: [2, 2, 1],
    exerciciosDeclaracaoDeVariaveis: [3, 4, 1, 1, 3]
};

buttonSubmit.addEventListener("click", () => {
    for(i = 0; i < questions.length; i++) {
        const radioAnswares = questions[i].querySelectorAll(".question-answare");
        var userAnswareIndex = null;
        for(x = 0; x < radioAnswares.length; x++) {
            if(radioAnswares[x].checked) {
                userAnswareIndex = x;
                questionIndex = i;
            }
        }
        if(userAnswareIndex == null){
            nullAnsware(i)
            break;
        } else {
            checkAnsware(userAnswareIndex, questionIndex);
        }
    }
});


function checkAnsware(answareIndex, questionIndex) {
    formAnswareStatus.style.display = "none";
    if(answareIndex == answers[form.id][questionIndex]) {
        correctAnsware(questionIndex);
    } else {
        wrongAnsware(questionIndex);
    }
}

function correctAnsware(questionIndex) {
    const questionAnswareStatus = questions[questionIndex].querySelector(".answare-status");
    questionAnswareStatus.innerHTML = "Resposta correta!";
    questionAnswareStatus.style.color = "#68FF60";
    questionAnswareStatus.style.display = "block";
}

function wrongAnsware(questionIndex) {
    const questionAnswareStatus = questions[questionIndex].querySelector(".answare-status");
    questionAnswareStatus.innerHTML = "Resposta errada!";
    questionAnswareStatus.style.color = "#a52929";
    questionAnswareStatus.style.display = "block";
}

function nullAnsware(questionIndex) {
    const questionAnswareStatus = questions[questionIndex].querySelector(".answare-status");
    questionAnswareStatus.innerHTML = "Preencha este campo!";
    questionAnswareStatus.style.color = "#a52929";
    questionAnswareStatus.style.display = "block";
    formAnswareStatus.innerHTML = "Preencha todas as questões do formulário!";
    formAnswareStatus.style.color = "#a52929";
    formAnswareStatus.style.display = "inline-block";
}