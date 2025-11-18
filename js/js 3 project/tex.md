clubs.forEach(c => {
    const img = new Image();
    img.src = c.logo;
});

const itemsPerClick = 4;
btn.addEventListener('click', () => {
  for (let k = 0; k < itemsPerClick; k++) {
    const h = document.createElement('h1');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rot = Math.random() * 90;
    const c1 = Math.floor(Math.random() * 256);
    const c2 = Math.floor(Math.random() * 256);
    const c3 = Math.floor(Math.random() * 256);

    
    const club = clubs[Math.floor(Math.random() * clubs.length)];


    const img = document.createElement('img');
    img.src = club.logo;
    img.alt = club.name + ' logo';
    img.className = 'club-logo';

 
    const label = document.createElement('span');
    label.className = 'club-label';
    label.textContent = club.name;


    h.appendChild(img);
    h.appendChild(label);

    h.style.position = 'absolute';
    h.style.left = x + '%';
    h.style.top = y + '%';
    h.style.setProperty('--rot', rot + 'deg');
    h.style.zIndex = 998;
    h.style.color = `rgb(${c1},${c2},${c3})`;

    h.classList.add('pop-in');
    main.appendChild(h);
  }

});

