let h1 = document.querySelector("#h")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

let count = 0;

let inc = btn1.addEventListener("click",()=>{
    count++;
    h1.innerHTML = `${count}`;
});

let dec = btn2.addEventListener("click",()=>{
    if(count!==0){
        count--;
        h1.innerHTML= `${count}`;
    }
    return count;
});
