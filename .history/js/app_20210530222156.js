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
console.log(mainArr);

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
    for (let i = 0; i < array.length; i++) {
        let tdEl = document.createElement('td');
        tBody.appendChild(tdEl);
        tdEl.textContent = `${mainArr[i].className}`;
    }
}