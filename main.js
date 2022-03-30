var students=[];
function submit(){
var one=document.getElementById("one").value;
var two=document.getElementById("two").value;
var three=document.getElementById("three").value;
var four=document.getElementById("four").value;
students.push(one);
students.push(two);
students.push(three);
students.push(four);
console.log(students);
document.getElementById("output").innerHTML=students;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}
function sort(){
    students.sort();
    console.log(students);
    document.getElementById("output").innerHTML=students;
    
}
