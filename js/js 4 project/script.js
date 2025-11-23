let main = document.querySelector("main")
let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let box =document.querySelector(".box")

form.addEventListener("submit",(dets)=>{
  dets.preventDefault();
  let src = dets.target[0].value;
 
  let boxes = document.createElement("div");
  boxes.classList.add("boxes");
  let pic = document.createElement("div");
  pic.classList.add("pic");
  let img = document.createElement("img");
  img.setAttribute("src",src);
  let h3 = document.createElement("h3");
  h3.textContent = `Name : ${dets.target[1].value}`;
  let h5 = document.createElement("h5");
  h5.textContent = `Work : ${dets.target[2].value}`
  let p = document.createElement("p")
  p.textContent = `Bio : ${dets.target[3].value}`;

  pic.appendChild(img)
  boxes.appendChild(pic)
  boxes.appendChild(h3)
  boxes.appendChild(h5)
  boxes.appendChild(p)

  box.appendChild(boxes)
  main.appendChild(box)

  input.forEach((elem)=>{
    if(elem.type !== "submit"){
      elem.value = "";
    }
  })



})
