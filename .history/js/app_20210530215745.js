'use strict';

let form = document.getElementById('myForm');
let table = document.getElementById('table');

let mainArr = [];
function Myform (className,numberOfClasses){
    this.className = className;
    this.numberOfClasses = numberOfClasses;
    mainArr.push(this);
}