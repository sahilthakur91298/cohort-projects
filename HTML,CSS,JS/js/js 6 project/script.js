let h1 = React.createElement("h1",null,"hello from sahil");
let h2 = React.createElement("h2",null,"hii from sahil")

let div = React.createElement("div",null,[h1,h2]);

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(div);