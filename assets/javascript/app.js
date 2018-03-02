$(document).ready(function() {

// Trivia data object
var triviaGame = {
    question1: {
        q : "What engineering company designed and built the Lunar Module (the part that actually landed on the moon)?",
        a1 : "North American Rockwell",
        a2 : "Grumman",
        a3 : "Boeing",
        a4 : "Martin Marieta",
    },
    question2: {
        q : "How many crew members were on each Apollo mission?",
        a1 : "1",
        a2 : "2",
        a3 : "3",
        a4 : "4",
    },
    question3: {
        q : "How many missions actually landed on the moon?",
        a1 : "1",
        a2 : "3",
        a3 : "5",
        a4 : "6",
    },
    question4: {
        q : "What was the name of the vehicle used to launch the command, service and lunar modules to the Moon?",
        a1 : "Treadstone II",
        a2 : "Falcon Heavy",
        a3 : "Saturn V",
        a4 : "Mercury 7",
    },
    question5: {
        q : "Who was the second man to set foot on the moon?",
        a1 : "Neil Armstrong",
        a2 : "John Glenn",
        a3 : "Edwin 'Buzz' Aldrin",
        a4 : "Jim Lovell",
    },
    questionWriter : function(question) {
        $("#question").text(question.q);
        $("#a1").text(question.a1);
        $("#a2").text(question.a2);
        $("#a3").text(question.a3);
        $("#a4").text(question.a4);
    },
}

triviaGame.questionWriter(triviaGame.question1);
console.log("this is working");


});