function CreatePancile(name,price,color){
    this.name = name;
    this.price = price;
    this.color = color;
}

CreatePancile.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)

    }

let pencile1 = new CreatePancile("natraj",20,"red");
let pencile2 = new CreatePancile("Doms",30,"blue");
