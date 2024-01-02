function addNewProjectField() {

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Here");

    let projectOb=document.getElementById("project");
    let projectAddBtnOb=document.getElementById("projectAddBtn");

    projectOb.insertBefore(newNode, projectAddBtnOb);
}

function addNewWeField() {

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb=document.getElementById("we");
    let weAddBtnOb=document.getElementById("weAddBtn");

    weOb.insertBefore(newNode, weAddBtnOb);
}

function addNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb=document.getElementById("aq");
    let aqAddBtnOb=document.getElementById("aqAddBtn");

    aqOb.insertBefore(newNode, aqAddBtnOb);
}

// generating cv
function GenerateCV(){
    let nameField=document.getElementById("nameField").value;
       let nameT1=document.getElementById("nameT1");
       nameT1.innerHTML=nameField;
       let nameT2=document.getElementById('nameT2');
       nameT2.innerHTML=nameField;

    //    contact
    document.getElementById("phoneT").innerHTML=document.getElementById('contactField').value;
    document.getElementById("addressT").innerHTML=document.getElementById('addressField').value;
    document.getElementById("gitT").innerHTML=document.getElementById('ghField').value;
    document.getElementById("linkT").innerHTML=document.getElementById('linkedField').value;
    document.getElementById("twitT").innerHTML=document.getElementById('tweetField').value;

//    objective
document.getElementById("objectiveT").innerHTML=document.getElementById('objectiveField').value;

let projects=document.getElementsByClassName('projectField');
let str='';
for(let e of projects){
    str=str+`<li> ${e.value} </li>`;
}
document.getElementById('projectT').innerHTML=str;


let wes=document.getElementsByClassName('weField');
let str1='';
for(let e of wes){
    str1=str1+`<li> ${e.value} </li>`;
}
document.getElementById('weT').innerHTML=str1;

let aqs=document.getElementsByClassName('aqField');
let str2='';
for(let e of aqs){
    str2=str2+`<li> ${e.value} </li>`;
}
document.getElementById('aqT').innerHTML=str2;

//code for image
//fetching image
let file=document.getElementById("imgField").files[0];
console.log(file);

//making reader
let reader=new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);

//set image to template
reader.onloadend=function() {
document.getElementById('imgT').src=reader.result;
};

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
//print CV
function PrintCV(){
    window.print();
}