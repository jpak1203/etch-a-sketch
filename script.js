let randomHex = () => {
    let hex = "";
    for (let i = 0; i < 8; i++) {
        let h = Math.floor((Math.random() * 15) + 1);
        switch (h) {
            case 10:
                hex += "a";
                break;
            case 11:
                hex += "b";
                break;
            case 12:
                hex += "c";
                break;
            case 13:
                hex += "d";
                break;
            case 14:
                hex += "e";
                break;
            case 15:
                hex == "f";
                break;
            default:
                hex += h;
        }
    }

    return hex;
}

let container = document.querySelector(".grid-container");

let createGrids = len => {
    container.style.gridTemplateColumns = "1fr ".repeat(len);

    for (let i = 0; i < Math.pow(len, 2); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "grid-item");
        container.appendChild(div);
    }

    let draw = function() {
        let color = randomHex();
        this.style.backgroundColor = "#" + color;
    }
    
    let gridItems = document.querySelectorAll(".grid-item").forEach((item) => {
        item.addEventListener("mouseover", draw);
    });
}

let clearGrids = () => {
    container.innerHTML = "";
}

createGrids(16);

let button = document.querySelector("#restart");
button.addEventListener("click", () => {
    let size = prompt("Grid size?")
    clearGrids();
    createGrids(size);
})