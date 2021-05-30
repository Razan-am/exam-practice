'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('table');

let headerData = ['class', 'number of classes', 'number of students for each class']

let mainArr = [];
function Myform(className, numberOfClasses) {
    this.className = className;
    this.numberOfClasses = numberOfClasses;
    this.randomNumber = 0;
    mainArr.push(this);
    setting();
}
console.log(mainArr);

function random(min, max) {
    mainArr.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}


myForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let className = event.target.className.value;
    let classNumber = event.target.classNumber.value;
    new Myform(className, classNumber);
    render();
}

function render() {
    // myTable.textContent='';

    let headerEl = document.createElement('tr');
    myTable.appendChild(headerEl);
    let tBody = document.createElement('tr');
    myTable.appendChild(tBody);
    for (let index = 0; index < mainArr.length; index++) {
        let thEl = document.createElement('th');
        headerEl.appendChild(thEl);
        thEl.textContent = `${headerData[index]}`

        let td1 = document.createElement('td');
        tBody.appendChild(td1);
        td1.textContent = `${mainArr[index].className}`;

        let td2 = document.createElement('td');
        tBody.appendChild(td2);
        td2.textContent = `${mainArr[index].numberOfClasses}`;

        let td3 = document.createElement('td');
        tBody.appendChild(td3);
        td3.textContent = `${mainArr.randomNumber}`;
    }

}


function setting() {
    let data = JSON.stringify(mainArr);
    localStorage.setItem('name' , data);
}

function getting() {
    let stringObj = localStorage.getItem('name')
    let normalObj = JSON.parse(stringObj);
    if(normalObj !== null){
        mainArr = normalObj;
    }
    render();
}
getting();