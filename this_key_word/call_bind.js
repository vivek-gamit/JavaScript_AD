//call apply bind

//call --> kitne bhi paramiters bhej sakte ho 
//apply --> keval do paramiters allow he
//bind -->  diye gaye function ki ek or copy banaleta he 

//method
let obj = {
    name : "vivek",
    age : 21
}
//function
function abcd(a,b,c){
    console.log(this,a,b,c);
}

//function call abcd-->obj-->data{name,age}
// abcd.call(obj.name)
//abcd.call(obj,1,2,3)

//apply
//abcd.apply(obj,[1,2,3])

//bind
//let fnc = abcd.bind(obj,1,2,3);
//fnc();

