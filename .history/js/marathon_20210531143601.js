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
    mainArr.push(this);
}
console.log(mainArr);

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event) {
    event.preventDefult();

    let name = event.target.name.value;
    let age = event.target.age.value;
    let gender = event.target.gender.value;
    let city = event.target.city.value;

    new Marathon (name,age,gender,city);
}