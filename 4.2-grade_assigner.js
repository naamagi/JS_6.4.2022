let score=+prompt("What is your grade?");
let result=gradeAssigner(score);
console.log(result);

function gradeAssigner(grade){
if (grade>=0 && grade<=64){
return "F";
}
else if (grade>=65 && grade<=69){
    return "D";
}
else if (grade>=70 && grade<=79){
    return "C";
}
else if (grade>=80 && grade<=89){
    return "B";
}
else if (grade>=90 && grade<=100){
    return "A";
}
}
