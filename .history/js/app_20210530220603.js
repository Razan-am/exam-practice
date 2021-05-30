'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('table');

let mainArr = [];
function Myform (className,numberOfClasses){
    this.className = className;
    this.numberOfClasses = numberOfClasses;
    mainArr.push(this);
}

myForm.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefult();
    let className = event.target.className.value;
    let classNumber = event.target.classNumber.value;
    new Myform(className,classNumber);
    render();
}

let tabelEl = document.createElement('table');
myTable.appendChild(tabelEl);
function render (){
    let thEl = document.createElement('th');
    tabelEl.appendChild(thEl);
    
}