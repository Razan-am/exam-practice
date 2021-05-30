'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('table');

let headerData = ['class', 'number of classes', 'number of students for each class']

let mainArr = [];
function Myform(className, numberOfClasses) {
    this.className = className;
    this.numberOfClasses = numberOfClasses;
    this.randomNumber = 0;
    this.total = 0;
    mainArr.push(this);
}
console.log(mainArr);

function random(min, max) {
    mainArr.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

function totals() {
    let sum = 0;
    for (let index = 0; index < mainArr.length; index++) {
        sum += mainArr.numberOfClasses;
        mainArr.total = sum;
    }
}
myForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let className = event.target.className.value;
    let classNumber = event.target.classNumber.value;
    new Myform(className, classNumber);
    theader();
    render();
    tFooter() ;
}

let headerEl = document.createElement('tr');
myTable.appendChild(headerEl);
function theader() {
    headerEl.textContent='';
    for (let index = 0; index < headerData.length; index++) {
        let thEl = document.createElement('th');
        headerEl.appendChild(thEl);
        thEl.textContent = `${headerData[index]}`
    }
}
let tBody = document.createElement('tr');
function render() {
    myTable.appendChild(tBody);
    for (let index = 0; index < mainArr.length; index++) {   
        let td1 = document.createElement('td');
        tBody.appendChild(td1);
        td1.textContent = `${mainArr[index].className}`;
    }

    for (let i = 0; i < mainArr.length; i++) {
        let td2 = document.createElement('td');
        tBody.appendChild(td2);
        td2.textContent = `${mainArr[i].numberOfClasses}`;
    }

    let td3 = document.createElement('td');
    tBody.appendChild(td3);
    td3.textContent = `${mainArr.randomNumber}`;


}

function tFooter() {
    
    for (let index = 0; index < mainArr.length; index++) {   
        let td4 = document.createElement('td');
        tBody.appendChild(td4);
        td4.textContent = `${mainArr.total}`
    }
}
random(1, 10);