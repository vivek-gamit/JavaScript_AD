//global this
console.log(this);

//function me
function abcd(){
    console.log(this);
}
abcd();

//method ke andar
let obj = {
    name : "vivek",
    saymyname : function(){
        console.log(this.name)
    }
}

//event handler 

