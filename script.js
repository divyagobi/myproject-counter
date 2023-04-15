
const mylabel=document.querySelector("#mylabel");
const increasebtn=document.querySelector("#increasebtn");
const resetbtn=document.querySelector("#resetbtn");
const decreasebtn=document.querySelector("#decreasebtn");
let count=0;
increasebtn.onclick=function(){
    mylabel.textContent=count;
    count+=1;
    mylabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    mylabel.textContent=count;
}
decreasebtn.onclick=function(){

    mylabel.textContent=count;
    count-=1;
    mylabel.textContent=count;
}



