'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('table');

let headerData = ['class','number of classes','number of students for each class']

let mainArr = [];
function Myform (className,numberOfClasses){
    this.className = className;
    this.numberOfClasses = numberOfClasses;
    this.randomNumber = 0;
    mainArr.push(this);
}
console.log(mainArr);
function random(1,100) {
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}
myForm.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let className = event.target.className.value;
    let classNumber = event.target.classNumber.value;
    new Myform(className,classNumber);
    render();
}

let tabelEl = document.createElement('table');
myTable.appendChild(tabelEl);
function render (){
    tabelEl.textContent='';
    let headerEl = document.createElement('tr');
    tabelEl.appendChild(headerEl);
    for (let index = 0; index < headerData.length; index++) {
        let thEl = document.createElement('th');
        headerEl.appendChild(thEl);
        thEl.textContent = `${headerData[index]}`
    }
    let tBody = document.createElement('tr');
    tabelEl.appendChild(tBody);
    for (let i = 0; i < mainArr.length; i++) {
        let tdEl = document.createElement('td');
        tBody.appendChild(tdEl);
        tdEl.textContent = `${mainArr[i].className} ${mainArr[i].numberOfClasses}`;
    }
}