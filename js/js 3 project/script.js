let main = document.querySelector('main');
let btn = document.querySelector('button');

let clubs = [
    { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    { name: 'FC Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
    { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
    { name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
    { name: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
    { name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
    { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
    { name: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg' },
    { name: 'Ajax', logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg' }
];

btn.addEventListener("click", function(){
   let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let image = document.createElement("img");

    let randomIndex = Math.floor(Math.random()*clubs.length);
    randomClub = clubs[randomIndex];

    clubName = randomClub.name;
    clubLogo = randomClub.logo;
    let x= Math.random()*100;
    let y = Math.random()*100;
    let rot = Math.random()*180;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    
     image.style.width = "120px";
     image.style.height = "120px";
     div.style.position = "absolute";
     div.style.left = x+"%";
     div.style.rotate = rot + "deg";
        div.style.top = y+"%";
        h1.style.fontSize = "20px";
        h1.style.textAlign = "center";
        div.classList.add("pop-in");
    
      image.src = clubLogo;;
      h1.innerHTML = clubName;
         main.appendChild(div); 
    div.appendChild(image);  
    div.appendChild(h1);

})