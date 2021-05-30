'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('table');

let headerData = ['class','number of classes','number of students for each class']

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
    let headerEl = document.createElement('tr');
    tabelEl.appendChild(thEl);
    for (let index = 0; index < headerData.length; index++) {
        let thEl = document.createElement('th');
        headerEl.appendChild(thEl);
        thEl.textContent = `${headerEl[index]}`
    }
}