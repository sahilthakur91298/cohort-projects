let story = "";

arr.forEach(function(el,idx){
    story += ` <div class="elem">
                    <img id = "${idx}"src="${el.dp}">
                </div>`;
})

elements.innerHTML = story ;

elements.addEventListener("click",function(dets){
     let clickedElem = dets.target.closest('.elem');
    clickedElem.style.borderColor = "grey";

    full.style.display = "block";   
    full.style.cursor = "pointer"; 
    full.style.backgroundImage = `url(${arr[dets.target.id].story})`; 

    
    setTimeout(() => {
        full.classList.add('show'); 
    }, 10);

    setTimeout(()=>{
        full.classList.remove('show');
        setTimeout(() => {
            full.style.display = "none";
        }, 10);
    },5000) 
});

full.addEventListener("click",()=>{
    full.classList.remove('show');
    setTimeout(() => {
        full.style.display = "none";
    }, 300);
});
