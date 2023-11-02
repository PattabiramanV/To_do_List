"use strict"

let conatiner=document.querySelector(".container");
let textbox=document.getElementById("textbox");
let submitbtn=document.getElementById("submitbtn");

submitbtn.addEventListener("click",Evalve);

let Clearbtn=document.createElement("button");
Clearbtn.setAttribute("id","Clearbtn");
Clearbtn.innerText="Clear";

let value=0;

function Evalve(){
    
    if(value==0 && textbox.value!=""){
    
    let innercontainer=document.createElement("div");
    innercontainer.setAttribute("class","innercontainer");

    let Ulcontent=document.createElement("ul");
    Ulcontent.setAttribute("id","Ulcontent");
    let inner_Ul=document.createElement("div");
    inner_Ul.id="inner_Ul";

    let licontent=document.createElement("p");
    licontent.setAttribute("class","Para");
     licontent.innerText=textbox.value;
    textbox.value="";
  
    let Two_btn=document.createElement("div");
    Two_btn.id="Two_btn";

    let Closebtn= document.createElement("button");
    Closebtn.setAttribute("id","Trashbtn");
     Closebtn.innerHTML=`<i class="fa-solid fa-trash"></i>`;
     
     var Edit_btn=document.createElement("button");
     Edit_btn.id="Edit_btn"
     Edit_btn.innerText="Edit";

     Two_btn.append(Edit_btn,Closebtn);
    inner_Ul.append(licontent,Two_btn);
    Ulcontent.appendChild(inner_Ul);
    innercontainer.appendChild(Ulcontent);
    conatiner.appendChild(innercontainer);
   
    Ulcontent.appendChild(Clearbtn);



    Clearbtn.addEventListener("click",ClearAll);

    function ClearAll(){
        Ulcontent.parentElement.remove();
        textbox.value="";

    }
   
    Closebtn.addEventListener("click",Clear);
    function Clear(){
        Closebtn.parentElement.parentElement.remove();
    }

  Edit_btn.addEventListener("click",Edit_Fun)
    
function Edit_Fun(){
    value=licontent;
    console.log(value);
    textbox.value=licontent.innerText;

}
}
else{
    if(value!=0){
        value.innerHTML=textbox.value;
        textbox.value=""
        value=0;
    }
    else{
        alert("Please Enter a input")
    }
}

}
