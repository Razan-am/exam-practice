'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');
let countainer = document.getElementById('countainer');

let mainArr = [];
let Marathon (name,age,gender,city){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    mainArr.push(this);
}

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event) {
    event.preventDefult();
}