function CreatePencil(name,price,color){
    this.name = name;
    this.price = price;
    this.color = color;
}

CreatePencil.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)

    }

let pencil1 = new CreatePancile("natraj",20,"red");
let pencil2 = new CreatePancile("Doms",30,"blue");
