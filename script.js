// alert("hello world");

// console.log(document);

function h1click(){
    console.log("teste")
}

function changeh1(i){
    
    let h1 = document.getElementsByTagName("h1")[0]
    // console.log(h1)
    h1.innerText = i.value;
}

function changeh2(i){
    
    let h1 = document.getElementsByTagName("h2")[0]
    
    h1.innerText = i.value;
}

function hideh1(){
    
    let h1 = document.getElementsByTagName("h1")[0]
    
    h1.style.display = "none";
}

function onOver(i){
    i.style.backgroundColor = "red";
}
function onOut(i){
    i.style.backgroundColor = "cornflowerblue";
}

