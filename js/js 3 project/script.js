let btn = document.querySelector('button');
let inner = document.querySelector('.inner');
let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');

let count = 0;

btn.addEventListener('click', function(){
    btn.style.pointerEvents = "none";

    let num = 50+Math.floor(Math.random() * 50);
    let int = setInterval(() => {
           count++;
    h2.innerHTML = count +"%";
    inner.style.width = count+"%";
    }, num);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Completed";
        btn.style.opacity = "0.5";
        h1.innerText = "All Yours now !!!"
        h1.style.fontSize = "40px";
        
    },num*100);
})