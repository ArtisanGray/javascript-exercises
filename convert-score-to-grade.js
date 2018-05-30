function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  var grade;
  if (score >= 90 && score <= 100)
  {
    grade = 'A';
    if (score >= 90 && score <= 92){return(grade + "-");}
    else if (score >= 98 && score <= 100){return(grade + "+");}
    else if (score >= 93 && score <= 97){return(grade);}
  }
  if (score >= 80 && score <= 89)
  {
    grade = 'B';
    if (score >= 80 && score <= 82){return(grade + "-");}
    else if (score >= 88 && score <= 89){return(grade + "+");}
    else if (score >= 83 && score <= 87){return(grade);}
  }
  if (score >= 70 && score <= 79)
  {
    grade = 'C';
    if (score >= 70 && score <= 72){return(grade + "-");}
    else if (score >= 78 && score <= 79){return(grade + "+");}
    else if (score >= 73 && score <= 77){return(grade);}
  }
  if (score >= 60 && score <= 69)
  {
    grade = 'D';
    if (score >= 60 && score <= 62){return(grade + "-");}
    else if (score >= 68 && score <= 69){return(grade + "+");}
    else if (score >= 63 && score <= 67){return(grade);}
  }
  if (score >= 0 && score <= 59)
  {
    grade = 'F';return(grade);
  }
  if (score > 100 || score < 0){return("INVALID SCORE");}
}
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output);
