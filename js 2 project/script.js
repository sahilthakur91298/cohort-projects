 let box = document.querySelector(".box");
        let btn = document.querySelector("button");
        let h1 = document.querySelector("#result");
        let main = document.querySelector("body");

        let arr = [
            {
                team: "CSK",
                winner: 2023,
                primary: "#FDB913",
                sec: "#00B8D4",
            },
            {
                team: "RCB",
                winner: 2025,
                primary: "#EC1C24",
                sec: "#1C1C1C",
            },
            {
                team: "SRH",
                winner: 2016,
                primary: "#FF822A",
                sec: "#000000",
            },
            {
                team: "RR",
                winner: 2008,
                primary: "#254AA5",
                sec: "#EA1A85",
            },
            {
                team: "MI",
                winner: 2020,
                primary: "#004BA0",
                sec: "#FFD700",
            },
        ];


        let winners = "";
        arr.forEach((el, idx) => {
            winners += `<h1 id="${idx}">${el.team}</h1>`;
        });

        box.innerHTML = winners;

        btn.addEventListener("click", () => {
            let randomIndex = Math.floor(Math.random() * arr.length);
            let win = arr[randomIndex];
            
            h1.textContent = `${win.team} - Winner: ${win.winner}`;
            h1.style.display = "block";
            box.style.backgroundColor = win.sec;
            main.style.backgroundColor = win.primary;
        });