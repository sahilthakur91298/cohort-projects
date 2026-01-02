let container = document.querySelector(".container")
let posts = document.querySelector(".posts")


let arr =[
    {
        title: "Water Drops",
        details : "Beautiful close-up of water droplets in the glass, showcasing their clarity and reflective properties.",
        img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwZHJvcHN8ZW58MHx8MHx8fDA%3D"
    },
     {
        title: "Deer in Forest",
        details: "A majestic deer standing amidst a dense forest, surrounded by tall trees and lush greenery.",
        img: "https://images.unsplash.com/photo-1763162944506-ee1fbaf5a733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
     {
        title: "Glass Painting",
        details: "A vibrant glass painting showcasing intricate designs and vivid colors.",
        img: "https://images.unsplash.com/photo-1763152496539-302ef51ef66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    },
     {
        title: "Night Sky",
        details: "A clear night sky filled with stars, capturing the beauty of the cosmos.",
        img: "https://images.unsplash.com/photo-1763156877609-d43b62d5f88c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        title: "Sky Scapers",
        details: "A stunning view of modern skyscrapers touching the sky.",
        img: "https://images.unsplash.com/photo-1763241287143-047ab2696b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
        title: "Apple Juice",
        details: "A refreshing glass of apple juice, highlighting its vibrant color and natural appeal.",
        img: "https://images.unsplash.com/photo-1763132638674-673e0ae020d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
    },
     {
        title: "Retro Music",
        details : "Vintage beats, Modern heart and Nostalgia is the soundtrack of the soul.",
        img: "https://images.unsplash.com/photo-1526394931762-90052e97b376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
    },
     {
        title: "Snow Forest ",
        details: "A picturesque snow-covered forest, capturing the tranquility and beauty of winter nature.",
        img: "https://plus.unsplash.com/premium_photo-1763378519176-eaa8c8e41233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
    },
     {
        title: "Street Photography",
        details: "Captivating street photography capturing candid moments and urban life.",
        img: "https://images.unsplash.com/photo-1763142165119-bc3669a0b4e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D"
    },
      {
        title: "Glasspainting",
        details: "An exquisite glass painting featuring colorful patterns and artistic craftsmanship.",
        img: "https://images.unsplash.com/photo-1763244737837-fdef959467c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"
    },
]

function allPosts(){
arr.forEach(elem => {
    let  pinCard = document.createElement('div');
    let  pinDetail = document.createElement('h3');
    pinDetail.className = 'pin-detail';
    pinDetail.textContent = elem.details;
    let h1 = document.createElement('h1');
    h1.textContent = elem.title;
    pinCard.className = 'pin-card';
    pinCard.innerHTML = `<img src="${elem.img}" alt="Pin">`;

    pinCard.appendChild(pinDetail);
    pinCard.appendChild(h1);
    container.appendChild(pinCard);

});
}

    let input = document.querySelector("#searchinput");   
    let overlay = document.querySelector(".overlay"); 
    let searchdata = document.querySelector(".searchdata");
  
 function searchPosts(){
        input.addEventListener("focus",()=>{
        overlay.style.display = "block";
        });

        input.addEventListener("input", () => {
    searchdata.innerHTML = ""; 
   

    const searchValue = input.value.toLowerCase();

    const filtered = arr.filter(item =>
        item.title.toLowerCase().startsWith(searchValue)
    );

    filtered.forEach((elem) => {
        const div = document.createElement("div");
        div.className = "searchItem";
        const h1 = document.createElement("h3");
        const image = document.createElement("img");
        image.src = elem.img;
        image.alt = elem.title;
        image.style.width = "30px";
        image.style.height = "30px";
        image.style.objectFit = "cover";
        image.style.borderRadius = "4px";        
        h1.textContent = elem.title;
        div.appendChild(image);
        div.appendChild(h1);
        searchdata.appendChild(div);
        
    });
      searchdata.style.display = filtered.length ? "block" : "none";
    });
    input.addEventListener("blur",()=>{
        
        overlay.style.display = "none";
        searchdata.style.display = "none";
    })
}

 
 searchPosts();
allPosts();