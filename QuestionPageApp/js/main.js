
function submitAnswers(){
    var total = 5;
    var score = 0;

    //Input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validation

    // if(q1 == null || q1 == ""){
    //     alert("You Missed question 1")
    //     return;
    // }
    for( i = 1; i <= total ; i++){
        if(eval('q'+i) == null || eval('q'+i) == ""){
            alert("You Missed question" + i);
            return false;
        }
    }
    // Correct Anwers
    var ans = ["a","b","b","d","a"];
    for(  i = 1; i <= total ; i++){
        if(eval('q'+i) == ans[i-1]){
            score++;
        }
    }

    // Dispaly result
    var results = document.getElementById("results");
    results.innerHTML="<h3> You Scored <span>" + score + "</span> out of <span>" +total+"</span></h3>";
    document.getElementById("quizForm").reset();
    //return true;

}
