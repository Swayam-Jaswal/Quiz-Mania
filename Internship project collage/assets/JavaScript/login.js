
let submitBtn = document.getElementById("submit-btn");
let myarr = [];

function pusharr(){
    let firstName = document.getElementById("fname");
    let cleanedarr = firstName.ariaValueMax.trim();

    if(cleanedarr){
        myarr.push(cleanedarr);
        firstName.value="";
        displayarr();
    }else{
        alert("enter a value");
    }
}

function savearr(){
    localStorage.setItem('myarr', JSON.stringify(myarr));
}