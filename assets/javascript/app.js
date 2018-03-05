$(document).ready(function () {

    // Trivia data object =======================================================================================
    var triviaGame = {
        // Questions. All a1 answers are the correct answer.
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
        questionCounter: 1,
        questionsRight: 0,
        questionsWrong: 0,
        answered: false,
        buttonTimeOut: null,
        questionWriter: function (question) {
            // Shuffle button divs. Adapted from https://stackoverflow.com/questions/18508742/multiple-ids-in-a-single-javascript-click-event
            $("#answers-div").each(function () {
                var buttons = $(this).find('button');
                for (var i = 0; i < buttons.length; i++) {
                    $(buttons[i]).remove();
                }
                // Fisher-Yates shuffle algorithm
                var i = buttons.length;
                if (i == 0) {
                    return false;
                }
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tempi = buttons[i];
                    var tempj = buttons[j];
                    buttons[i] = tempj;
                    buttons[j] = tempi;
                }
                for (var i = 0; i < buttons.length; i++) {
                    $(buttons[i]).appendTo(this);
                }
            });
            // Push question and answer text to the document
            $("#question").empty().text(question.q);
            $("#a1").empty().text(question.a1);
            $("#a2").empty().text(question.a2);
            $("#a3").empty().text(question.a3);
            $("#a4").text(question.a4);
            triviaGame.answered = false;
        },
        nextQuestion: function(number) {
            $(".btn").removeClass("btn-success btn-danger");
            var currentQuestion = triviaGame["question" + number];
            triviaGame.questionWriter(currentQuestion);
        }

    } // End trivia data object =======================================================================================

    // Load a question
    triviaGame.questionWriter(triviaGame.question1);

    // Click a btn class
    $("#answers-div").on("click", ".btn", function () {
        var $this = this;
        var clickedId = $($this).attr("id");

        if (!triviaGame.answered) {
            triviaGame.questionCounter++;
            if (clickedId === "a1") {
                $($this).addClass("btn-success");
                triviaGame.questionsRight++;
                triviaGame.answered += true;
                triviaGame.nextQuestion(triviaGame.questionCounter);

            }
            if (clickedId != "a1") {
                $($this).addClass("btn-danger");
                triviaGame.questionsWrong++;
            }
            //stop timer
        }
    });
});