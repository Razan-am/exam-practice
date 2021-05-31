'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');
let countainer = document.getElementById('countainer');

let mainArr = [];
function Marathon (name,age,gender,city){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.images = ['Female-icon.png','Male-icon.png'];
    this.src = 'images/'+ images;
    mainArr.push(this);
}
console.log(mainArr);

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let age = event.target.age.value;
    let gender = event.target.gender.value;
    let city = event.target.city.value;

    new Marathon (name,age,gender,city);
    setting();
    render();
}

let headerData = ['Name','Age','Gender','City','Participant Number']
let tableHeader = document.createElement('tr');
myTable.appendChild(tableHeader);
function render (){
    let tableBody = document.createElement('tr');
    myTable.appendChild(tableBody);
    for (let index = 0; index < mainArr.length; index++) {
        tableHeader.textContent = '';
        tableBody.textContent = '';
        for (let index = 0;  index< headerData.length; index++) {
            let theader = document.createElement ('th');
            tableHeader.appendChild(theader);
            theader.textContent=`${headerData[index]}`;
        }
        let td1 = document.createElement('td');
        tableBody.appendChild(td1);
        td1.textContent=`${mainArr[index].name}`

        let td2 = document.createElement('td');
        tableBody.appendChild(td2);
        td2.textContent=`${mainArr[index].age}`

        let td3 = document.createElement('td');
        tableBody.appendChild(td3);
        td3.textContent=`${mainArr[index].gender}`

        let td4 = document.createElement('td');
        tableBody.appendChild(td4);
        td4.textContent=`${mainArr[index].city}`;


        let td5 = document.createElement('td');
        tableBody.appendChild(td5);
        td5.textContent = `${randomNumber(1,50)}`;
    }
}

function setting (){
    let data = JSON.stringify(mainArr);
    localStorage.setItem('information',data);
}

function getting (){
    let stringObj = localStorage.getItem('information');
    let normalObj = JSON.parse(stringObj);

    if (normalObj !== null){
        mainArr = normalObj;
    }
    render();
}
getting ();



