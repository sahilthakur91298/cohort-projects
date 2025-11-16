let elements = document.querySelector(".elements")
let elem = document.querySelector(".elem")
let full = document.querySelector("#full");
let storyTimeout;

let arr = [
    {
      dp: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1619300026534-8e8a76941138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D"}, 
       { 
        dp: "https://plus.unsplash.com/premium_photo-1710695570399-7d6e3725ba23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXRzfGVufDB8fDB8fHww",story : "https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D"

      },
       {
        dp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXRzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
       {
        dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXRzfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1690462856355-43c83f168495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
        },
       {
        dp: "https://images.unsplash.com/photo-1586965529163-8c7d69503892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1581872454565-822dac9367aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D"
        },
       {
        dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1581872454565-822dac9367aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D"
        },
       {
        dp: "https://images.unsplash.com/photo-1619300026534-8e8a76941138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
     {
        dp: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1660304755794-a4c94ca4cceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVzc2l8ZW58MHx8MHx8fDA%3D"
    },


];
let story = "";
 arr.forEach((el,idx)=>{
    story += ` <div class="elem">
                    <img id = "${idx}"src="${el.dp}">
                </div>`;
 })

 elements.innerHTML = story;

 elements.addEventListener("click",(dets)=>{
    let checked = dets.target.closest(".elem");
    
       if(storyTimeout) {
        clearTimeout(storyTimeout);
    }

    checked.style.borderColor = "grey"
    full.style.backgroundImage = `url(${arr[dets.target.id].story})`
    full.style.display = "block";

    setTimeout(() => {
        full.classList.add("show");
        
    }, 10);

    storyTimeout = setTimeout(() => {

        full.classList.remove("show");
        setTimeout(() => {
            full.style.display = "none";            
        }, 10);
        
    }, 5000)
 });

full.addEventListener("click",()=>{
       if(storyTimeout) {
        clearTimeout(storyTimeout);
    }
    full.classList.remove("show");
    setTimeout(()=>{
        full.style.display = "none";
    },300);
})


let hero = document.querySelector(".heroo");

let arr2 = [
    {
        post: "https://images.unsplash.com/photo-1565115155214-fe80dce1edb4?w=500&auto=format&fit=crop&q=60",
        like : "fa-solid fa-heart",
    },
    {
        post: "https://images.unsplash.com/photo-1614958909258-8c704847cbd2?w=500&auto=format&fit=crop&q=60",
        like :"fa-solid fa-heart",
    },
    {
        post: "https://images.unsplash.com/photo-1547196004-b808ecbb5fe6?w=500&auto=format&fit=crop&q=60",
        like : "fa-solid fa-heart",
    },
    {
        post: "https://images.pexels.com/photos/26698447/pexels-photo-26698447.jpeg",
        like : "fa-solid fa-heart",
    },
    {
        post: "https://images.pexels.com/photos/34671003/pexels-photo-34671003.jpeg",
        like :"fa-solid fa-heart",
        
    }

];

let post ="";
 arr2.forEach((e,idxx)=>{

    post += `  <div class="img-box">
        <img id ="${idxx}"src="${e.post}">
        <i class="${e.like}"></i>
    </div>`
 });

hero.innerHTML += post;

let boxes = document.querySelectorAll(".img-box");


boxes.forEach(box => {
  let icon = box.querySelector("i");

  box.addEventListener("dblclick", () => {
    icon.classList.add("active");

    setTimeout(() => {
      icon.classList.remove("active");
    }, 700);
  });

});


















