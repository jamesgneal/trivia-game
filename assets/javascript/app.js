$(document).ready(function () {

    // Trivia data object
    var triviaGame = {
        answered: false,
        question1: {
            q: "What engineering company designed and built the Lunar Module (the part that actually landed on the moon)?",
            a1: "Grumman",
            a2: "North American Rockwell",
            a3: "Boeing",
            a4: "Martin Marieta",
        },
        question2: {
            q: "How many crew members were on each Apollo mission?",
            a1: "3",
            a2: "2",
            a3: "1",
            a4: "4",
        },
        question3: {
            q: "How many missions actually landed on the moon?",
            a1: "6",
            a2: "1",
            a3: "3",
            a4: "5",
        },
        question4: {
            q: "What was the name of the vehicle used to launch the command, service and lunar modules to the Moon?",
            a1: "Saturn V",
            a2: "Treadstone II",
            a3: "Falcon Heavy",
            a4: "Mercury 7",
        },
        question5: {
            q: "Who was the second man to set foot on the moon?",
            a1: "Edwin 'Buzz' Aldrin",
            a2: "Neil Armstrong",
            a3: "John Glenn",
            a4: "Jim Lovell",
        },
        questionWriter: function (question) {
            $("#question").text(question.q);
            $("#a1").text(question.a1);
            $("#a2").text(question.a2);
            $("#a3").text(question.a3);
            $("#a4").text(question.a4);
        },
        rightAnswer: function () {
            $("#a1").removeClass("btn-secondary").addClass("btn-success");
        },
    }

    // Load a question
    triviaGame.questionWriter(triviaGame.question1);

    // Click the right answer
    $("#a1").on("click", function () {
        if (!triviaGame.answered) {
            triviaGame.rightAnswer();
            triviaGame.answered = true;
        }
    });

    // Click the wrong answer
    $(".decoy").on("click", function () {
        if (!triviaGame.answered) {
            $(this).removeClass("btn-secondary").addClass("btn-danger");
            triviaGame.answered = true;
        }
    });


});